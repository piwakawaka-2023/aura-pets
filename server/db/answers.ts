import connection from './connection'
import {Answer}  from '../../models/types'
const db = connection 


export function getAnswers() {
  return db('answers')
  .select('id', 
  'question_id',
  'answer',
  'pet_id')
  
  .join('questions', 'answers.question_id', 'questions.id')
  .join('pets', 'answers.pet_id', 'pet.id')
}
