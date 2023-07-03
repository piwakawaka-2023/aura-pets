import express from 'express'
import * as db from '../db/users'
import { JwtRequest } from '../auth0'
import checkJwt from '../auth0'

const router = express.Router()

router.get('/:id', checkJwt, async (req: JwtRequest, res) => {
  try {
    const id = Number(req.params.id)
    const auth0Id = req.auth?.sub
    if (!auth0Id) {
      console.error('No auth0 id')
      return res.status(401).send('Unauthorized')
    } else {
      const profileData = await db.getProfile(id)
      res.json({ profileData })
    }
  } catch (error) {
    console.error(`error while getting profile: ${error}`)
    res.sendStatus(500)
  }
})

router.put('/:id', checkJwt, (req: JwtRequest, res) => {
  const id = Number(req.params.id)
  const { updateData } = req.body
  const auth0Id = req.auth?.sub
  const profileInfoToUpdate = {
    ...updateData,
    pet_nickname: updateData.petNickname,
    bio: updateData.bio,
  }

  if (!auth0Id) {
    console.error('No auth0Id')
    return res.status(401).send('Unauthorized')
  }
  db.canUserEdit(id, auth0Id)
    .then(() => db.updateProfile(profileInfoToUpdate))
    .then(() => db.getProfile(id))
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
