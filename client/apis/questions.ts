import request from 'superagent'
import { Question } from '../../models/types'

const url = '/api/v1/questions'

export async function fetchQuestions(): Promise<Question[]> {
  const res = await request.get(url)
  return res.body
}
