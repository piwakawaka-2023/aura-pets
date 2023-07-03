import express from 'express'

import * as db from '../db/chat'

const router = express.Router()

// GET all messages
router.get('/', async (req, res) => {
  try {
    const messageArr = await db.getAllMessages()
    res.json(messageArr)
  } catch (error) {
    console.error(`error while getting questions: ${error}`)
    res.sendStatus(500)
  }
  
})
export default router