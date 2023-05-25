import './App.css';

import React from 'react';

import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { CreateTodoButton } from './components/CreateTodoButton';
import { TodoItem } from './components/TodoItem';

const defaultTodos = [
  { id: 1, text: 'ToDo número 1', completed: false},
  { id: 2, text: 'ToDo número 2', completed: true},
  { id: 3, text: 'ToDo número 3', completed: false},
  { id: 4, text: 'ToDo número 4', completed: false},
  { id: 5, text: 'ToDo número 5', completed: true},
  { id: 6, text: 'ToDo número 6', completed: false},
  { id: 7, text: 'ToDo número 7', completed: false},
  { id: 8, text: 'ToDo número 8', completed: true},
  { id: 9, text: 'ToDo número 9', completed: false},
  { id: 0, text: 'ToDo número 10', completed: false},
  { id: 10, text: 'KAKA', completed: false},
  { id: 11, text: 'kaka', completed: false},
  
];

function App() {
  
  //App es el componente padre, por eso definimos aquí los estados.
  const [searchedState, setSearchedState] = React.useState(''); //Estado para leer contenido del buscador
  const [todo, setTodo] = React.useState(defaultTodos); //Estado para recibir los todos/actividades actuales

  //Filtamos los todos completados
  const todosCompletados = todo.filter((e) => {
    if(e.completed === true){
      return e;
    }
  });
  const todosCantidad = todo.length;
  const todosCompletadosCantidad = todosCompletados.length;

  //Creación del estado derivado
  const searchedTodos = todo.filter( (e) => {
    let textoMinusculas = e.text.toLocaleLowerCase().toString();
    let searchedValueMinusculas = searchedState.toLocaleLowerCase().toString();
    return textoMinusculas.includes(searchedValueMinusculas);
  });

  //Completamos una actividad
  function completeTodo(id_todo){
    let newTodos = [...todo];
    let gottenTodo = todo.find((e) => {
      if(e.id == id_todo){
        return e;
      }
    });
    console.log('gottenTodo: ', gottenTodo);

    gottenTodo.completed = true;
    setTodo(newTodos)
  }

  function deleteTodo(){
    
  }

  return (
      <React.Fragment>
        <div style={{
          boxShadow:'0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
          borderRadius: '20px'
        }}>

          <TodoCounter 
            completed={todosCompletadosCantidad} 
            total={todosCantidad}/>

          <TodoSearch
            //Pasamos como props los estados
            stateProp={searchedState}
            setStateProp={setSearchedState}
          />

          <TodoList>
            {searchedTodos.map(todo => (
              <TodoItem 
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              //Para completar las tareas
              onComplete={() => {
                completeTodo(todo.id);
              }}
              //Para borrar las tareas
              onDelete={() => {
                deleteTodo(todo.id);
              }}
              />
              ))}
          </TodoList>
        </div>
        <CreateTodoButton/>
      </React.Fragment>

  );
}

export default App;
