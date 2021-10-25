import * as act from '../constants/actionTypes'

const authReducer = (state = { authData: null }, { type, data }) => {
  switch (type) {
    case act.AUTH:
      localStorage.setItem('profile', JSON.stringify(data))
      return { ...state, authData: data }
    case act.LOGOUT:
      localStorage.clear()
      return { ...state, authData: null }
    // case act.CREATE:
    //   return [...posts, payload]
    // case act.UPDATE:
    // case act.LIKE:
    //   return posts.map(post => post._id !== payload._id ? post : payload)
    // case act.DELETE:
    //   return posts.filter(post => post._id !== payload)
    default:
      return state
  }
}

export default authReducer