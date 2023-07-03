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

export default router
