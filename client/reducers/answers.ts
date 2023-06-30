import { Answer } from '../../models/types'
import { AnswerActions } from '../../models/actions'
import { SET_ANSWERS } from '../actions/answers'

const initialState = [] as Answer[]

export default function answersReducer(
  state = initialState,
  action: AnswerActions
) {
  const { type, payload } = action
  switch (type) {
    case SET_ANSWERS:
      return payload

    default:
      return state
  }
}
