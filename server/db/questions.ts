import connection from './connection'
import { Question }  from '../../models/types'
const db = connection 


export function getQuestions(): Promise<Question> {
  return db('questions')
  .select('id', 
  'question'
  )
}
