import * as api from '../api'
import * as act from '../constants/actionTypes'

// Action creators ...

export const getPosts = (page) => async (dispatch) => {
  try {
    dispatch({ type: act.START_LOADING })
    const { data } = await api.fetchPosts(page)

    dispatch({ type: act.FETCH_ALL, payload: data })
    dispatch({ type: act.END_LOADING })
  } catch (error) {
    // dispatch({ type: 'ERROR', payload: error.message })
  }
}

export const getPost = (id) => async (dispatch) => {
  try {
    dispatch({ type: act.START_LOADING })
    const { data } = await api.fetchPost(id)
    dispatch({ type: act.FETCH_POST, payload: data })
    dispatch({ type: act.END_LOADING })
  } catch (error) {
    // dispatch({ type: 'ERROR', payload: error.message })
  }
}

export const getPostsBySearch = (searchQuery) => async (dispatch) => {
  try {
    dispatch({ type: act.START_LOADING })
    const { data: { data } } = await api.fetchPostsBySearch(searchQuery)
    dispatch({ type: act.FETCH_BY_SEARCH, payload: data })
    dispatch({ type: act.END_LOADING })
  } catch (error) {
    // dispatch({ type: 'ERROR', payload: error.message })
  }
}

export const createPost = (newPost, history) => async (dispatch) => {
  try {
    dispatch({ type: act.START_LOADING })
    const { data } = await api.createPost(newPost)
    dispatch({ type: act.CREATE, payload: data })
    history.push(`/posts/${data._id}`)
    dispatch({ type: act.END_LOADING })
  } catch (error) {
    // dispatch({ type: 'ERROR', payload: error.message })
  }
}

export const updatePost = (currentId, updatedPost) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(currentId, updatedPost)
    dispatch({ type: act.UPDATE, payload: data })
  } catch (error) {
    // dispatch({ type: 'ERROR', payload: error.message })
  }
}

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id)
    dispatch({ type: act.DELETE, payload: id })
  } catch (error) {
    // dispatch({ type: 'ERROR', payload: error.message })
  }
}

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id)
    dispatch({ type: act.LIKE, payload: data })
  } catch (error) {
    // dispatch({ type: 'ERROR', payload: error.message })
  }
}

// Comment ... 
export const commentPost = (comment, id) => async (dispatch) => {
  try {
    const { data } = await api.comment(comment, id)
    dispatch({ type: act.COMMENT, payload: data })
    return data.comments
  } catch (error) {
    // dispatch({ type: 'ERROR', payload: error.message })
  }
}

