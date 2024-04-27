export function TodoItems({completed, id, title, toggleTodo, deleteTodo}){
    return(
        <li key={id}>
          <label>
            <input type="checkbox" checked={completed}
            onChange={e => toggleTodo(id, e.target.checked)}
            />
              {title}
          </label>
          <button type="button" className="btn btn-danger" onClick={() => deleteTodo(id)}
          >Delete</button>
        </li>
    )
}