export interface Question {
  qId: number
  question: string
}

export interface Answer {
  id: number
  answer: string
  questionId: number
  petId: number
  petName: string
}

export interface ResultData {
  name: string
  sprite: string
  bio: string
}
export interface Result extends ResultData {
  pId: number
}
