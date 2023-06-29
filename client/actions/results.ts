import * as api from '../apis/results'
import { ThunkAction } from '../store'
import { Result } from '../../models/types'

export const INCREMENT = 'INCREMENT'
export const SET_RESULT = 'SET_RESULT'

export function increment(name: string) {
  return {
    type: INCREMENT,
    payload: name,
  }
}

export function setResult(petData: Result) {
  return {
    type: SET_RESULT,
    payload: petData,
  }
}

export function getResultThunk(petId: number): ThunkAction {
  return async (dispatch) => {
    try {
      const result = await api.fetchResult(petId)
      dispatch(setResult(result))
    } catch (err) {
      console.error('oh no, result action error! ', err)
    }
  }
}
