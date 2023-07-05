import { Answer } from '../../models/types'
import request from 'superagent'

const url = '/api/v1/answers'

export async function fetchAnswers(): Promise<Answer[]> {
  const res = await request.get(url)
  return res.body
}
