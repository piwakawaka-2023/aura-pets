import express from 'express'
import * as db from '../db/users'
import { JwtRequest } from '../auth0'
import checkJwt from '../auth0'

const router = express.Router()

router.get('/', checkJwt, async (req: JwtRequest, res) => {
  try {
    const auth0Id = req.auth?.sub
    if (!auth0Id) {
      console.error('No auth0 id')
      return res.status(401).send('Unauthorized')
    } else {
      const profileData = await db.getProfile(auth0Id)
      res.json({ profileData })
    }
  } catch (error) {
    console.error(`error while getting profile: ${error}`)
    res.sendStatus(500)
  }
})

router.put('/', checkJwt, (req: JwtRequest, res) => {
  const { updateData } = req.body
  const auth0Id = req.auth?.sub
  const profileInfoToUpdate = {
    id: updateData.id,
    username: updateData.username,
    pet_nickname: updateData.petNickname,
    pet_id: updateData.petId,
    sprite: updateData.sprite,
    bio: updateData.bio,
    user_auth_id: auth0Id,
  }

  if (!auth0Id) {
    console.error('No auth0Id')
    return res.status(401).send('Unauthorized')
  }
  db.canUserEdit(updateData.id, auth0Id)
    .then(() => db.updateProfile(profileInfoToUpdate))
    .then(() => db.getProfile(auth0Id))
    .then((profile) => res.json({ profile }))
    .catch((err: Error) => {
      console.error(err)
      if (err.message === 'Unauthorized') {
        res
          .status(403)
          .send('Unauthorized: Only the user who added the fruit may update it')
      } else {
        res.status(500).send('Something went wrong')
      }
    })
})

export default router
