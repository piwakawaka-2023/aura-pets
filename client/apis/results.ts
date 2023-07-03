import request from 'superagent'
import { Result } from '../../models/types'

const url = '/api/v1/result'

export async function fetchResult(id: number): Promise<Result> {
  const res = await request.get(`${url}/${id}`)
  return res.body
}
