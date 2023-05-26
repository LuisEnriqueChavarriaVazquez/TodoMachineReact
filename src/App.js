import './App.css';

import React from 'react';

import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { CreateTodoButton } from './components/CreateTodoButton';
import { TodoItem } from './components/TodoItem';


function App() {
  
  //App es el componente padre, por eso definimos aquí los estados.
  const [searchedState, setSearchedState] = React.useState(''); //Estado para leer contenido del buscador
  const [todo, setTodo] = React.useState(convertStoredTodos()); //Estado para recibir los todos/actividades actuales

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
    //Hacemos una copia del estado actual de las actividades
    let newTodos = [...todo];

    //Buscamos al elemento por su ID
    let gottenTodo = newTodos.find((e) => {
      if(e.id == id_todo){
        return e;
      }
    });

    //Si el elemento esta en true entonces lo hacemos false y viceversa
    if(gottenTodo.completed == true){
      gottenTodo.completed = false;
    }else{
      gottenTodo.completed = true;
    }

    //Guardamos en memoria los todos
    storeTodos(newTodos);
    //Actualizamos el estado
    setTodo(newTodos);
  }

  //Borramos una actividad
  function deleteTodo(id_todo){
    //Borramos el elemento filtrandolo por el id
    let filteredTodo = todo.filter((e) => {
      if(e.id != id_todo){
        return e;
      }
    });

    //Guardamos en memoria los todos
    storeTodos(filteredTodo);
    //Actualizamos el estado
    setTodo(filteredTodo);
  }

  //Alamacenamos en memoria nuestros todos
  function storeTodos(todoArray){
    localStorage.setItem('todos_storaged', JSON.stringify(todoArray));
    return convertStoredTodos();
  }

  function convertStoredTodos(){
    if(localStorage.getItem('todos_storaged') === null){
      console.log('No hay elementos en memoria.')
      localStorage.setItem('todos_storaged', JSON.stringify([{ id: 1, text: 'Actividad de ejemplo', completed: false},]));
    }

    return JSON.parse(localStorage.getItem('todos_storaged'));
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
              onComplete={() => {completeTodo(todo.id);}}
              //Para borrar las tareas
              onDelete={() => {deleteTodo(todo.id);}}
              />
              ))}
          </TodoList>
        </div>
        <CreateTodoButton/>
      </React.Fragment>

  );
}

export default App;
