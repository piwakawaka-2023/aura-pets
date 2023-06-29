import { INCREMENT } from '../actions/answers'
import { AnswerAction } from '../../models/actions'

const initialState = {
  axolotl: 0,
  penguin: 0,
  bear: 0,
  cat: 0,
}

export default function answersReducer(
  state = initialState,
  action: AnswerAction
) {
  const { type, payload } = action
  switch (type) {
    case INCREMENT:
      state.[payload] = state.[payload] + 1
      return { ...state }

    default:
      return state
  }
}
