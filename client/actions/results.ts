export const INCREMENT = 'INCREMENT'
export const SET_RESULT = 'SET_RESULT'

export function increment(name: string) {
  return {
    type: INCREMENT,
    payload: name,
  }
}
