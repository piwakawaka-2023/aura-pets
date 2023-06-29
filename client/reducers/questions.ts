import { SET_QUESTIONS } from '../actions/questions'
import { Question } from '../../models/types'
import { QuestionActions } from '../../models/actions'

const initialState = [] as Question[]

export default function questionsReducer(
  state = initialState,
  action: QuestionActions
) {
  const { type, payload } = action
  switch (type) {
    case SET_QUESTIONS:
      return payload

    default:
      return state
  }
}
