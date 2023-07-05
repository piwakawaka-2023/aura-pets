import { ThunkAction } from '../store'
import { Question } from '../../models/types'
import { QuestionActions } from '../../models/actions'
import * as api from '../apis/questions'

export const SET_QUESTIONS = 'SET_QUESTIONS'

export function setQuestions(questions: Question[]): QuestionActions {
  return {
    type: SET_QUESTIONS,
    payload: questions,
  }
}

export function getQuestionsThunk(): ThunkAction {
  return async (dispatch) => {
    try {
      const questionsArr = await api.fetchQuestions()
      dispatch(setQuestions(questionsArr))
    } catch (err) {
      console.error('oh no, result action error! ', err)
    }
  }
}
