import request from 'superagent'

const url = '/api/v1/profile'

export async function fetchProfile(id: number) {
  const res = await request.get(`${url}/${id}`)
  return res.body
}
