import connection from './connection'
// import {} from '../../models/types'

const db = connection

export function getProfile(userAuthId: string) {
  return db('users')
    .where('user_auth_id', userAuthId)
    .join('pets', 'users.pet_id', 'pets.id')
    .select(
      'username',
      'pet_nickname',
      'pets.sprite AS sprite',
      'users.bio AS bio'
    )
}

export function canUserEdit(userId: number, auth0id: string) {
  return db('users')
    .where('id', userId)
    .first()
    .then((users) => {
      if (users.user_auth_id !== auth0id) {
        throw new Error('Unauthorized')
      }
    })
}

export function updateProfile(profileData) {
  return db('users').where('id', profileData.id).update(profileData)
}
