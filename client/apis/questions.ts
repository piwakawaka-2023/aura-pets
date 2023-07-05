import { Question } from '../../models/types'
import request from 'superagent'

const url = '/api/v1/questions'

export async function fetchQuestions(): Promise<Question[]> {
  const res = await request.get(url)
  return res.body
}
