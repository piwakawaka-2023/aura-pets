import { INCREMENT, SET_RESULT } from '../actions/results'
import { ResultAction } from '../../models/actions'

export interface ResultTally {
  axolotl: number
  penguin: number
  bear: number
  cat: number
}

const initialState = {
  axolotl: 0,
  penguin: 0,
  bear: 0,
  cat: 0,
} as ResultTally

export default function resultsReducer(
  state = initialState,
  action: ResultAction
) {
  const { type, payload } = action
  switch (type) {
    case INCREMENT:
      state[payload] = state[payload] + 1
      return { ...state }

    case SET_RESULT:
      return payload

    default:
      return state
  }
}
