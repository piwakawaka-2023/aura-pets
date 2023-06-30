import { Question, Answer } from './types'

export type QuestionActions = { type: 'SET_QUESTIONS'; payload: Question[] }
export type AnswerActions = { type: 'SET_ANSWERS'; payload: Answer[] }
export type TallyAction = { type: 'INCREMENT'; payload: string }
