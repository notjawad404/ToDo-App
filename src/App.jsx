import './App.css';
import { useState } from "react";

function TodoList() {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    const todoText = todoInput.trim();
    if (todoText !== "") {
      setTodos([...todos, todoText]);
      setTodoInput("");
    }
  };

  const handleEditTodo = (index) => {
    const newTodo = prompt("Enter new todo:", todos[index]);
    if (newTodo && newTodo.trim() !== "") {
      const updatedTodos = [...todos];
      updatedTodos[index] = newTodo;
      setTodos(updatedTodos);
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <div className="bg-red-400 flex justify-center items-center h-screen">
      <div className="container mx-auto max-w-md">
        <h1 className="text-2xl font-bold mb-4">Todo List</h1>
        <input
          type="text"
          className="w-full border rounded p-2 mb-2"
          placeholder="Enter a task"
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
          onClick={handleAddTodo}
        >
          Add
        </button>
        <ul className="list-disc list-inside my-4">
          {todos.map((todo, index) => (
            <li key={index}>
              {todo}
              <button
                className="bg-blue-500 hover:bg-green-600 text-white font-bold py-1 px-2 rounded mx-4 my-4"
                onClick={() => handleEditTodo(index)}
              >
                Edit
              </button>
              <button
                className="bg-yellow-500 hover:bg-green-600 text-white font-bold py-1 px-2 rounded"
                onClick={() => handleDeleteTodo(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
