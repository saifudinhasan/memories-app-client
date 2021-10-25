import axios from 'axios'

const API = axios.create({ baseURL: 'https://memories-saifudinhasan.herokuapp.com/' })

// Middleware interceptor, run every request
// Send jwt token to backend to verify if we're logged in
// Verifying in backend middleware
API.interceptors.request.use((req) => {
  const profile = localStorage.getItem('profile')
  if (profile) req.headers.Authorization = `Bearer ${JSON.parse(profile).token}`
  return req
})

export const fetchPost = (id) => API.get(`/posts/${id}`)
export const fetchPosts = (page) => API.get(`/posts?page=${page}`)
export const fetchPostsBySearch = (searchQuery) => API.get(`/posts/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`)
export const createPost = (newPost) => API.post('/posts', newPost)
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost)
export const deletePost = (id) => API.delete(`/posts/${id}`)
export const likePost = (id) => API.patch(`/posts/${id}/like-post`)
export const comment = (comment, id) => API.post(`/posts/${id}/comment-post`, { value: comment })


export const signIn = (formData) => API.post('user/signin', formData)
export const signUp = (formData) => API.post('user/signup', formData)