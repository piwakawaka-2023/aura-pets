export interface Question {
  id: number
  question: string
}

export interface Answer {
  id: number
  answer: string
  questionId: number
  petId: number
  petName: string
}

export interface Result {
  id: number
  name: string
  sprite: string
  bio: string
}
