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

export default router
