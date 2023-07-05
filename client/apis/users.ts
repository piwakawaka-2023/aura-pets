import request from 'superagent'
import { UpdateUserInfo, UserProfile } from '../../models/types'

const url = '/api/v1/profile'

export async function fetchProfile(
  username: string | undefined
): Promise<UserProfile[]> {
  const res = await request.get(`${url}/${username}`)
  return res.body
}

export async function patchProfile(
  username: string | undefined,
  data: UpdateUserInfo
) {
  const res = await request.patch(`${url}/${username}`).send(data)
  return res.body
}
