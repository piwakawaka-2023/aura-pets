import express, { Router } from 'express'
import * as db from '../db/dbpets'

const router = express.Router()

router.get('/result/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const petsArr = await db.getPet(id)
    res.json(petsArr)
  } catch (error) {
    console.log('oh no, theyre down with the sickness, wa ah ah ah', error)
    res.sendStatus(500)
  }
})

export default router
