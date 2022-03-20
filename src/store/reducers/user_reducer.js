import {
  SEND_MESSAGE
} from '../types'

export default function userReducer (state = {}, action) {
  switch (action.type) {
    case SEND_MESSAGE:
      return {...state, contact: action.payload}
    default:
      return state
  }
}
