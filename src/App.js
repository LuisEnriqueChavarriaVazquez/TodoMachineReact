import './App.css';

import React from 'react';

import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { CreateTodoButton } from './components/CreateTodoButton';
import { TodoItem } from './components/TodoItem';

const defaultTodos = [
  { text: 'ToDo número 1', completed: false},
  { text: 'ToDo número 2', completed: true},
  { text: 'ToDo número 3', completed: false},
  { text: 'ToDo número 4', completed: false},
  { text: 'ToDo número 5', completed: true},
  { text: 'ToDo número 6', completed: false},
  { text: 'ToDo número 7', completed: false},
  { text: 'ToDo número 8', completed: true},
  { text: 'ToDo número 9', completed: false},
  { text: 'ToDo número 10', completed: false},
  { text: 'ToDo número 11', completed: true},
  { text: 'ToDo número 12', completed: false},
  
];

function App() {
  return (
      <React.Fragment>
        <div style={{
          boxShadow:'0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
          borderRadius: '20px'
        }}>
          <TodoCounter completed={16} total={20}/>
          <TodoSearch/>

          <TodoList>
            {defaultTodos.map(todo => (
              <TodoItem 
              key={todo.text}
              text={todo.text}
              completed={todo.completed}/>
              ))}
          </TodoList>
        </div>
        <CreateTodoButton/>
      </React.Fragment>

  );
}

export default App;
