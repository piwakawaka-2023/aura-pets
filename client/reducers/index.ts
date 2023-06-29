import { combineReducers } from 'redux'

import questionsReducer from './questions'
import answersReducer from './answers'
import resultsReducer from './results'

export default combineReducers({
  questionsReducer,
  answersReducer,
  resultsReducer,
})
