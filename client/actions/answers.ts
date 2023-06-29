import * as api from '../apis/results'
import { ThunkAction } from '../store'

export const INCREMENT = 'INCREMENT'

export function increment(name: string) {
  return {
    type: INCREMENT,
    payload: name,
  }
}
