import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, selectTodos } from './Slice/slice';

function App() {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();
  const [todoText, setTodoText] = useState('');

  const handleAddTodo = () => {
    if (todoText.trim() !== '') {
      dispatch(addTodo({
        id: Date.now(),
        text: todoText,
        completed: false,
      }));
      setTodoText('');
    }
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className='container text-center m-5 bg-light'>
      <h1 className='text-warning m-3'>ToDo App</h1>
        <input style={{borderRadius:'20px'}}
          type="text"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          placeholder="Enter your todo..."
        />
      <button className='btn btn-info me-5'style={{borderRadius:'20px'}} onClick={handleAddTodo}>Add Todo</button>
      <h4 style={{}}>All Todos</h4>
      <div className='justify-content-between align-items-center'>

        <ul>
          {todos.map(todo => (
              <li key={todo.id}>
                <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
                <button className='text-danger' onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
              </li>
            
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;