import request from 'superagent'
import { Result, UserResultData } from '../../models/types'

const url = '/api/v1/result'

export async function fetchResult(id: number): Promise<Result> {
  const res = await request.get(`${url}/${id}`)
  return res.body
}

export async function postResult(
  resultData: UserResultData,
  token: string
): Promise<UserResultData> {
  const res = await request
    .post(url)
    .set('Authorization', `Bearer ${token}`)
    .send({ resultData })
  return res.body
}
