import express from 'express'
import * as db from '../db/users'

const router = express.Router()

router.get('/:id', async (req, res) => {
  const id = Number(req.params.id)
  try {
    const profileData = await db.getProfile(id)
    res.json(profileData)
  } catch (error) {
    console.error(`error while getting profile: ${error}`)
    res.sendStatus(500)
  }
})

export default router
