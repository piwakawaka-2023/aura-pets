import express from 'express'

import * as db from '../db/questions'

const router = express.Router()

// GET all questions
router.get('/', async (req, res) => {
  try {
    const questionArr = await db.getQuestions()
    res.json(questionArr)
  } catch (e) {
    console.error(`error while getting questions: ${e}`)
  }
  
})