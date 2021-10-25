import * as api from '../api'
import * as act from '../constants/actionTypes'

export const signIn = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData)
    dispatch({ type: act.AUTH, data })
    history.push('/')
  } catch (error) {

  }
}

export const signUp = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData)
    dispatch({ type: act.AUTH, data })
    history.push('/')
  } catch (error) {

  }
}