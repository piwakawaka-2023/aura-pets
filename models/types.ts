export interface Question {
  qId: number
  question: string
}

export interface Answer {
  aId: number
  answer: string
  questionId: number
  petId: number
  petName: string
}

export interface Result {
  axolotl: number
  penguin: number
  bear: number
  cat: number
}
