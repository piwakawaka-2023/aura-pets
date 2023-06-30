import connection from './connection'
import {Answer}  from '../../models/types'
const db = connection 


export function getAnswers() {
  return db('answers')
  .join('questions', 'answers.question_id', 'questions.id')
  .join('pets', 'answers.pet_id', 'pets.id')
  .select('answers.id', 
  'question_id as questionId',
  'answer',
  'pet_id as petId',
  'pets.name as petName')
}
