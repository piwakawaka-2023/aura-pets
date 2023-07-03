import connection from './connection'
import {
  Result,
  UserResultDataSnakeCase,
  UserResultSnakeCase,
} from '../../models/types'

const db = connection

export function getResult(id: number): Promise<Result[]> {
  return db('pets').select().where({ id })
}

export function postResult(
  data: UserResultDataSnakeCase
): Promise<UserResultSnakeCase[]> {
  return db('users')
    .insert(data)
    .returning([
      'id',
      'username',
      'pet_nickname',
      'pet_id',
      'bio',
      'user_auth_id',
    ])
}
