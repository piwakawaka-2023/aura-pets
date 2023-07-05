export const INCREMENT = 'INCREMENT'
export const SET_RESULT = 'SET_RESULT'

export function increment(name: string | number | symbol) {
  return {
    type: INCREMENT,
    payload: name,
  }
}
