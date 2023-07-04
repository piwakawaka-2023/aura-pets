import { UPDATE_PROFILE } from '../actions/users'
import { UpdateUserInfo } from '../../models/types'
import { UserActions } from '../../models/actions'

const initialState = [] as UpdateUserInfo[]

export default function questionsReducer(
  state = initialState,
  action: UserActions
) {
  const { type, payload } = action
  switch (type) {
    case UPDATE_PROFILE:
      return state.map((profile) =>
        profile.username === payload.username ? payload : profile
      )

    default:
      return state
  }
}
