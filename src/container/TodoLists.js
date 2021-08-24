import { useSelector } from 'react-redux'
import Todo from './Todo'

const TodoLists = () => {

  const { todos, error } = useSelector(state => state)

  return (
    <ul className="todo-list">
      {error && <h3>{error}</h3>}
      {todos?.map(todo => <Todo todo={todo} key={todo.id} />)}
    </ul>
  )
}

export default TodoLists