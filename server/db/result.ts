import connection from './connection'
import { Result } from '../../models/types'

const db = connection


export function getResult(id: number): Promise<Result[]> {
  return db('pets').select().where({ id })
}

export function postResult(id: number): Promise<number> {
  return db('users').insert(id AS pet_id)
}

