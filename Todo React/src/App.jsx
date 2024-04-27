import { useEffect, useState } from "react";
import "./styles.css"
import NewTodoForm from "./NewTodoForm";
import TodoList from "./TodoList";

function App() {
  const [todoItem, setTodoItem] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []

    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todoItem))
  }, [todoItem])

  function addTodo(title){
    setTodoItem(currentTodos => {
      return[
        ...currentTodos,
        {
          id:crypto.randomUUID(), title, completed:false
        },
      ]
    })
  }

  function toggleTodo(id, completed){
    setTodoItem(currentTodos => {
      return currentTodos.map(todos => {
        if(todos.id === id){
          return {...todos, completed}
        }

        return todos
      })
    })
  }

  function deleteTodo(id){
    setTodoItem(currentTodos =>{
      return currentTodos.filter(todos => todos.id !== id)
    })
  }

  return (
  <>
    <NewTodoForm addTodo={addTodo}/>
    <h1 className="header">Todo List</h1>
    <TodoList todoItem={todoItem} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
  </>
  )
}

export default App;