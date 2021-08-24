import { useRef, useState } from "react"
import { useDispatch } from "react-redux"
import { deleteTodo, putTodo } from "../redux/actions/todoActions"

const Todo = ({ todo }) => {

  const dispatch = useDispatch()
  const [editTodo, setEditTodo] = useState()
  const inputRef = useRef()

  const handleUpdateTodo = e => {
    e.preventDefault()
    const newInput = inputRef.current.value.trim()

    // Update ...
    dispatch(putTodo(todo, { text: newInput }))

    setEditTodo(false)
  }

  return (
    <li>

      {!editTodo &&
        <div className="" style={{ textDecoration: todo.completed && "line-through" }}>{todo.text}</div>
      }

      {editTodo &&
        <form onSubmit={handleUpdateTodo} style={{ display: "flex" }}>
          <input type="text" ref={inputRef} defaultValue={todo.text} />
          <button>Save</button>
        </form>
      }

      <button onClick={() => dispatch(putTodo(todo, { completed: !todo.completed }))}>
        {!todo.completed ? 'Done' : 'Cancle Done'}
      </button>

      <button onClick={() => { setEditTodo(!editTodo) }}>
        {editTodo ? 'cancle edit' : 'edit'}
      </button>

      <button onClick={() => dispatch(deleteTodo(todo.id))}>
        delete
      </button>

    </li>
  )
}


export default Todo