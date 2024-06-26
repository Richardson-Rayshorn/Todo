import { useState } from "react";

function NewTodoForm({addTodo}) {
    const [newItem, setNewItem] = useState("")

    function handleSubmit(e){  
        e. preventDefault();
        
        if (newItem === "") return

        addTodo(newItem)

        setNewItem("")
      }

    return (
        <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item"/>
      </div>
      <div className="form-row">
        <button className="btn">Add</button>
      </div>
    </form>
    )
}

export default NewTodoForm