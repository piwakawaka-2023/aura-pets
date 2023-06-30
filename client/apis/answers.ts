import request from 'superagent'
import { Answer } from '../../models/types'

const url = '/api/v1/answers'

export async function fetchAnswers(): Promise<Answer[]> {
  const res = await request.get(url)
  return res.body
}
