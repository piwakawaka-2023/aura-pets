import request from 'superagent'
import { UserProfile } from '../../models/types'

const url = '/api/v1/profile'

export async function fetchProfile(
  username: string | undefined
): Promise<UserProfile[]> {
  console.log(username, 'username')
  const res = await request.get(`${url}/${username}`)
  console.log(res.body)
  return res.body
}
