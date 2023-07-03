import connection from './connection'
// import {} from '../../models/types'

const db = connection

export function getProfile(id: number) {
  return db('users')
    .where('id', id)
    .join('pets', 'users.pet_id', 'pets.id')
    .select(
      'username',
      'pet_nickname',
      'pets.sprite AS sprite',
      'users.bio AS bio'
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

export function updateProfile(profileData) {
  return db('users').where('id', profileData.id).update(profileData)
}
