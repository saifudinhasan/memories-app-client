import { useRef } from "react"
import { useDispatch } from 'react-redux'
import { postTodo } from "../redux/actions/todoActions"

const Input = () => {
  const dispatch = useDispatch()
  const todoRef = useRef()

  const handleSubmit = e => {
    e.preventDefault()
    const newTodo = todoRef.current.value.trim()

    // Post ...
    dispatch(postTodo(newTodo))

    todoRef.current.value = ''
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={todoRef} />
      <button type="submit">Add Todo</button>
    </form>
  )
}

export default Input