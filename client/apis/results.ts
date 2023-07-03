import request from 'superagent'
import { Result } from '../../models/types'

const url = '/api/v1/result'

export async function fetchResult(id: number): Promise<Result> {
  const res = await request.get(`${url}/${id}`)
  return res.body
}

export function postResult(
  id: number,
  resultData: object | undefined,
  token: string
): Promise<number> {
  return request
    .post(`${url}/${id}`)
    .set('Authorization', `Bearer ${token}`)
    .send(resultData)
    .then((res) => res.body.result)
    .catch((logError) => {
      console.error('error', logError)
    })
}
