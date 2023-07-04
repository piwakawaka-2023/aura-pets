import connection from './connection'
// import {} from '../../models/types'

const db = connection

export function getProfile(id: number) {
  return db('users')
    .where('users.id', id)
    .join('pets', 'users.pet_id', 'pets.id')
    .select(
      'users.id AS usersId',
      'username',
      'pet_nickname AS petNickname',
      'pets.id AS petsTypeId',
      'users.pet_id AS usersPetId',
      'sprite',
      'users.bio AS userBio'
    )
    .first()
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
