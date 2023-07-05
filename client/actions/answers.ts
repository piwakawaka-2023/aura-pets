import { ThunkAction } from '../store'
import { Answer } from '../../models/types'
import { AnswerActions } from '../../models/actions'
import * as api from '../apis/answers'

export const SET_ANSWERS = 'SET_ANSWERS'

export function setAnswers(answers: Answer[]): AnswerActions {
  return {
    type: SET_ANSWERS,
    payload: answers,
  }
}

export function getAnswerThunk(): ThunkAction {
  return async (dispatch) => {
    try {
      const answersArr = await api.fetchAnswers()
      dispatch(setAnswers(answersArr))
    } catch (err) {
      console.error('oh no, result action error! ', err)
    }
  }
}
