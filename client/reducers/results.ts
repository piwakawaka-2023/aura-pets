import { INCREMENT } from '../actions/results'
import { TallyAction } from '../../models/actions'

export interface ResultTally {
  Axolotl: number
  Penguin: number
  Bear: number
  Cat: number
  Count: number
}

const initialState = {
  Axolotl: 0,
  Penguin: 0,
  Bear: 0,
  Cat: 0,
  Count: 0,
} as ResultTally

export default function resultsReducer(
  state = initialState,
  action: TallyAction
) {
  const { type, payload } = action
  switch (type) {
    case INCREMENT:
      state[payload] = state[payload] + 1
      state.Count += 1
      return { ...state }

    default:
      return state
  }
}
