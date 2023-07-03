import express from 'express'
import * as db from '../db/result'

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


router.post('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    await db.postResult(id)
  } catch (error) {
    console.log('error while getting post for pet:', error)
    res.sendStatus(500)
  }
})

export default router
