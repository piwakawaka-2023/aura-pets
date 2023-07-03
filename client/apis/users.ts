import request from 'superagent'

const url = '/api/v1/profile'

export async function fetchProfile(id: number, token: string) {
  const res = await request
    .get(`${url}/${id}`)
    .set('Authorization', `Bearer ${token}`)
  return res.body
}
