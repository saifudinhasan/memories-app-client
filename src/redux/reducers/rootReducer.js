import { combineReducers } from 'redux'
import errorReducer from './errorSlice'
import todosReducer from './todosSlice'

const rootReducer = combineReducers({
  todos: todosReducer,
  error: errorReducer
})

export default rootReducer
