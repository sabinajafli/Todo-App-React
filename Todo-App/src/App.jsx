import React, { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import "./index.css"


const App = () => {
   const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
   const [todos, setTodos] = useState(storedTodos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleEditTodo = (index, updatedValue) => {
    const newTodos = [...todos];
    newTodos[index] = updatedValue.trim(); 
    setTodos(newTodos);
  };

  return (
    <div className="container">
      <div className="todo">
        <h1>Todo List</h1>
        <TodoForm onAddTodo={handleAddTodo} />
        <p>Total Todo: {todos.length}</p>
        <TodoItem
          todos={todos}
          handleEdit={handleEditTodo}
          handleDelete={handleDeleteTodo}
        />
      </div>
    </div>
  );
}



export default App;