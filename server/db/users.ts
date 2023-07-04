import { UserProfile } from '../../models/types'
import connection from './connection'

const db = connection

export function getProfile(username: string): Promise<UserProfile> {
  return db('users')
    .where({ username })
    .join('pets', 'users.pet_id', 'pets.id')
    .select(
      'users.id AS usersId',
      'username',
      'pet_nickname AS petNickname',
      'users.pet_id AS usersPetId',
      'pets.sprite AS petSprite',
      'users.bio AS userBio'
    )
}

export function canUserEdit(id: number, auth0id: string) {
  return db('users')
    .where('id', id)
    .first()
    .then((users) => {
      if (users.user_auth_id !== auth0id) {
        throw new Error('Unauthorized')
      }
    })
}
