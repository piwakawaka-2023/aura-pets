import { INCREMENT } from '../actions/results'
import { ResultAction } from '../../models/actions'
import { Result } from '../../models/types'

const initialState = {
  axolotl: 0,
  penguin: 0,
  bear: 0,
  cat: 0,
} as Result

export default function resultsReducer(
  state = initialState,
  action: ResultAction
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
