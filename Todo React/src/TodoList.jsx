import { TodoItems } from "./TodoItems"

function TodoList({todoItem, toggleTodo, deleteTodo}){
    return(
        <ul className="list">
      {todoItem.length === 0 && "No Todos"}
      {todoItem.map(todos => {
        return(
            <TodoItems id={todos.id} completed={todos.completed} 
                title={todos.title} key={todos.id} toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}/>
        )
      })}
      
    </ul>
    )
}

export default TodoList