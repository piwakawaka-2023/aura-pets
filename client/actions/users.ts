import { UpdateUserInfo } from '../../models/types'
import { UserActions } from '../../models/actions'
import { ThunkAction } from '../store'
import * as api from '../apis/users'

export const ERROR = 'ERROR'
export const UPDATE_PROFILE = 'UPDATE_PROFILE'

export function error(message: string): UserActions {
  return {
    type: ERROR,
    payload: message,
  }
}

export function updateProfile(data: UpdateUserInfo): UserActions {
  return {
    type: UPDATE_PROFILE,
    payload: data,
  }
}

export function updateProfileThunk(
  username: string,
  data: UpdateUserInfo
): ThunkAction {
  return async (dispatch) => {
    try {
      const res = await api.patchProfile(username, data)
      dispatch(updateProfile(res))
    } catch (err) {
      dispatch(error(String(err)))
    }
  }
}
