import express from 'express'
import * as db from '../db/result'
// import { JwtRequest } from '../auth0'
// import checkJwt from '../auth0'

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

router.post('/', async (req, res) => {
  const newUserPet = {
    username: req.body.username,
    pet_id: req.body.petId,
    pet_nickname: req.body.petNickname,
    user_auth_id: req.body.userAuthId,
    bio: 'Add a pet bio',
  }

  try {
    const petAddConfirmation = await db.postResult(newUserPet)
    res.json(petAddConfirmation[0])
  } catch (error) {
    console.log('error while getting post for pet:', error)
    res.sendStatus(500)
  }
})

export default router
