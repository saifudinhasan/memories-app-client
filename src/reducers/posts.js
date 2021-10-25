import * as act from '../constants/actionTypes'

export default (state = { isLoading: true, posts: [] }, { type, payload }) => {
  switch (type) {
    case act.FETCH_ALL:
      return {
        ...state,
        posts: payload.data,
        currentPage: payload.currentPage,
        numberOfPages: payload.numberOfPages,
      }
    case act.FETCH_BY_SEARCH:
      return { ...state, posts: payload }
    case act.FETCH_POST:
      return { ...state, post: payload }
    case act.CREATE:
      return { ...state, posts: [...state.posts, payload] }
    case act.UPDATE:
    case act.LIKE:
    case act.COMMENT:
      return { ...state, posts: state.posts.map(post => post._id !== payload._id ? post : payload) }
    case act.DELETE:
      return { ...state, posts: state.posts.filter(post => post._id !== payload) }
    case act.START_LOADING:
      return { ...state, isLoading: true }
    case act.END_LOADING:
      return { ...state, isLoading: false }
    default:
      return state
  }
}