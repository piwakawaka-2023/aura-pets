import * as api from '../apis/results'
import { ThunkAction } from '../store'
import { Question } from '../../models/types'
import { QuestionActions } from '../../models/actions'

export const SET_QUESTIONS = 'SET_QUESTIONS'

export function setQuestions(questions: Question[]): QuestionActions {
  return {
    type: SET_QUESTIONS,
    payload: questions,
  }
}
