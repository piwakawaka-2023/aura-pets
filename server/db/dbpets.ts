import connection from './connection'
import {} from '../../models/types'
import { Result } from '../../models/types'
const db = connection

export function getPet(id: number): Promise<Result[]> {
  return db('getPet').select('pId', 'name', 'sprite', 'bio').where({ id }) //Hopefully this is the table name
}

// pId: number
//   name: string
//   sprite: string
//   bio: string
