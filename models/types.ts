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

<<<<<<< HEAD
export interface ResultData {
=======
export interface Result {
  id: number
>>>>>>> 5a3426f613091c4664bb0dd1e82c94a87aaf7bc7
  name: string
  sprite: string
  bio: string
}
export interface Result extends ResultData {
  pId: number
}
