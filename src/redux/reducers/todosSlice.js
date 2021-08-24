import acts from "../acts"

// action destructured to {type, payload}
const todosReducer = (state = [], { type, payload }) => {
  switch (type) {

    case acts.GET_TODOS: return payload

    case acts.ADD_TODO: return [...state, payload]

    case acts.UPDATE_TODO: return state.map(todo => todo.id === payload.id ? payload : todo)

    case acts.DELETE_TODO: return state.filter(todo => todo.id !== payload)

    default: return state
  }
}

export default todosReducer