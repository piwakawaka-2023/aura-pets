import express from 'express'
import * as db from '../db/pets'

const router = express.Router()

router.get('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const petsArr = await db.getPet(id)
    res.json(petsArr)
  } catch (error) {
    console.log('error while getting pet:', error)
    res.sendStatus(500)
  }
})

export default router
