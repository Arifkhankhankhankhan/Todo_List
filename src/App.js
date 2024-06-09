import React, { useState } from 'react';
import './App.css';

function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([
    'this is first todo',
    'this is second todo',
    'this is third todo',
    'this is fourth todo',
  ]);

  const addTodo = () => {
    if (todo === '') {
      alert('Please enter a todo');
      return;
    }
    setTodos([...todos, todo]);
    setTodo('');
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="container">
      <div className="header">
        <h2>Todo Application</h2>
      </div>
      <div className="input">
        <input
          type="text"
          placeholder="Enter your todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <div className="output">
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              <span>{todo}</span>
              <button onClick={() => removeTodo(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
