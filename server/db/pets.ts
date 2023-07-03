import connection from './connection'
import { Result } from '../../models/types'

const db = connection

export function getPet(id: number): Promise<Result[]> {
  return db('pets').select().where({ id })
}
