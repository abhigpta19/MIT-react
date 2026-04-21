import React, { useState, useMemo } from 'react';
import { useDebounce } from '../hooks/useDebounce';
import { useFetch } from '../hooks/useFetch';
import './Todos.css';
import { useWindowWidth } from '../hooks/useWindowWidth';
import { useComponentSize } from '../hooks/useComponentSize';

function Todos() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  // Fetch all todos
  const { data: allTodos, loading, error } = useFetch('https://dummyjson.com/todos');

  // Memoize the expensive filter operation - only runs when debouncedSearchTerm changes
  const filteredTodos = useMemo(() => {
    if (!allTodos?.todos) return [];

    console.log("filering triggered")
    
    return allTodos.todos.filter((todo) =>
      todo.todo.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
    );
  }, [allTodos, debouncedSearchTerm]);

  return (
    <div className='todos-container'>
      <h1>Todo List</h1>

      <div className='search-box'>
        <input
          type='text'
          placeholder='Search todos...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className='search-input'
        />
      </div>

      {error && <div className='error-message'>Error: {error}</div>}

      {loading && <div className='loading'>Loading todos...</div>}

      {!loading && filteredTodos.length === 0 && (
        <div className='no-results'>
          {debouncedSearchTerm ? `No todos found for "${debouncedSearchTerm}"` : 'No todos available'}
        </div>
      )}
      <div className='todos-grid'>
        {filteredTodos.map((todo) => (
          <div key={todo.id} className={`todo-card ${todo.completed ? 'completed' : ''}`}>
            <div className='todo-header'>
              <h3>{todo.todo}</h3>
              <span className={`status-badge ${todo.completed ? 'completed' : 'pending'}`}>
                {todo.completed ? '✓ Completed' : '○ Pending'}
              </span>
            </div>
            <div className='todo-meta'>
              <p>User ID: {todo.userId}</p>
              <p>Priority: <span className='priority'>Normal</span></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Todos;
