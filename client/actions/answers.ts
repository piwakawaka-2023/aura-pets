import * as api from '../apis/results'
import { ThunkAction } from '../store'
import { Answer } from '../../models/types'
import { AnswerActions } from '../../models/actions'

export const SET_ANSWERS = 'SET_ANSWERS'

export function setAnswers(answers: Answer[]): AnswerActions {
  return {
    type: SET_ANSWERS,
    payload: answers,
  }
}
