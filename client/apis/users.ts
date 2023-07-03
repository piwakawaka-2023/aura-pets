import request from 'superagent'

const url = '/api/v1/profile'

export async function fetchProfile(token: string) {
  const res = await request.get(url).set('Authorization', `Bearer ${token}`)
  return res.body
}
