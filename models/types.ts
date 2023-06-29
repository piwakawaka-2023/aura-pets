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
  pId: number
  name: string
  sprite: string
  bio: string
}
