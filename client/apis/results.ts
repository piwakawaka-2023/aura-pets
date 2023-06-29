import request from 'superagent'

const url = '/api/v1/result'

export async function fetchResult(id: number) {
  const res = await request.get(`${url}/${id}`)
  return res.body
}
