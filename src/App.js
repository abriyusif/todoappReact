import React from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = React.useState([])
  const [todo, setTodo] = React.useState("")
  const [todoEditing, setTodoEditing] = React.useState(null)
  const [editingText, setEditingText] = React.useState("")

  function handleSubmit(e) {
    e.preventDefault()

    const newTodo = {
      id: new Date().getTime(),
      tex: todo,
      completed: false,
    }
    setTodos([...todos].concat(newTodo))
    setTodo("")
  }
  function deleteTodo(id) {
    const updatedTodos = [...todos].filter((todo) => todo.id !== id) 
    setTodos(updatedTodos)
  }
  function editTodo(id) {
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.tex = editingText
      }
      return todo
    })
    setTodos(updatedTodos)
    setTodoEditing(null)
    setEditingText("")
  }
  return (
    <div className="App">
      <div><h1>Todo app</h1></div>
      <form onSubmit={handleSubmit}>
        
        <input type="text" onChange={(e) => setTodo(e.target.value) } value={todo}  />

        <button type="submit" className="btnAdd">add items</button>
      </form>
      
          {todos.map((todo) => <div>
            
            {todoEditing === todo.id ? (<input type="text" onChange={(e) => setEditingText(e.target.value)} value = {editingText} />) : ( <div> {todo.tex} </div> )}

            {todoEditing === todo.id ? (<button onClick={() => editTodo(todo.id)}>update</button>) : (<button onClick={() => setTodoEditing(todo.id)}>edit</button>)}


            <button onClick={() =>deleteTodo(todo.id)}>delete</button>
          </div>)}
      
    
    </div>
  );
}

export default App;
