import express from 'express'
import * as db from '../db/result'
import checkJwt, { JwtRequest } from '../auth0'
import { UserResultDataSnakeCase } from '../../models/types'

const router = express.Router()

router.get('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const [petsArr] = await db.getResult(id)
    res.json(petsArr)
  } catch (error) {
    console.log('error while getting pet:', error)
    res.sendStatus(500)
  }
})

router.post('/', checkJwt, async (req: JwtRequest, res) => {
  try {
    const auth0Id = req.auth?.sub
    console.log(auth0Id) //TODO: TAKE OUT
    const { resultData } = req.body

    const profileData: UserResultDataSnakeCase = {
      username: resultData.username,
      pet_id: resultData.petId,
      pet_nickname: resultData.petNickname,
      bio: 'Add your pets bio',
      user_auth_id: auth0Id,
    }
    console.log(profileData) //TODO: TAKE OUT

    if (!auth0Id) {
      console.error('No auth0 id')
      return res.status(401).send('Unauthorized')
    }

    const petAddConfirmation = await db.postResult(profileData)
    res.json(petAddConfirmation[0])
  } catch (error) {
    console.log('error while getting post for pet:', error)
    res.sendStatus(500)
  }
})

export default router
