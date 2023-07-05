import { Result, UserResultData } from '../../models/types'
import request from 'superagent'

const url = '/api/v1/result'

export async function fetchResult(id: number): Promise<Result> {
  const res = await request.get(`${url}/${id}`)
  return res.body
}

export async function postResult(
  resultData: UserResultData
): Promise<UserResultData> {
  const res = await request.post(url).send(resultData)
  return res.body
}
