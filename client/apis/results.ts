import request from 'superagent'

const url = '/api/v1'

export async function fetchResult(id: number) {
  const res = await request.get(`${url}/result/${id}`)
  return res.body
}
