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

export interface UserResultData {
  petId: number
  username: string | undefined
  petNickname: string
  userAuthId: string | undefined
}

export interface UserResult extends UserResultData {
  id: number
  bio: string
}

export interface UserResultDataSnakeCase {
  username: string | undefined
  pet_nickname: string
  pet_id: number
  bio: string
  user_auth_id: string | undefined
}

export interface UserResultSnakeCase extends UserResultDataSnakeCase {
  id: number
}

export interface UserProfile {
  usersId: number
  username: string
  petNickname: string
  usersPetId: number
  petSprite: string
  userBio: string
}
