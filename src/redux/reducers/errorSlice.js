import acts from "../acts"

const errorReducer = (state = null, { type, payload }) => {
  switch (type) {
    case acts.ADD_ERROR: return payload
    // case acts.NO_ERROR: return null
    default: return state
  }
}

export default errorReducer