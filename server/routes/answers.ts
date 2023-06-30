import express from 'express'

import * as db from '../db/answers'

const router = express.Router()

// GET all answers
router.get('/', async (req, res) => {
  try {
    const answerArr = await db.getAnswers()
    res.json(answerArr)
  } catch (error) {
    console.error(`error while getting answers: ${error}`)
  }
  
})
export default router