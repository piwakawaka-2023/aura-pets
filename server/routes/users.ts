import express from 'express'
import * as db from '../db/users'

const router = express.Router()

router.get('/:username', async (req, res) => {
  const username = req.params.username
  try {
    const profileData = await db.getProfile(username)
    res.json(profileData)
  } catch (error) {
    console.error(`error while getting profile: ${error}`)
    res.sendStatus(500)
  }
})

router.patch('/:username', async (req, res) => {
  const username = req.params.username
  const newProfileInfo = {
    ...req.body,
    pet_nickname: req.body.petNickname,
  }
  delete newProfileInfo.petNickname

  try {
    const updateProfileData = await db.updateProfile(username, newProfileInfo)
    res.json(updateProfileData[0])
  } catch (err) {
    console.error('Update Profile route error: ', err)
    res.sendStatus(500)
  }
})

export default router
