import Input from "./container/Input";
import TodoList from "./container/TodoLists";

function App() {
  return (
    <div className="app">
      <h1>Todo App</h1>
      <TodoList />
      <Input />
    </div>
  );
}

export default App;
