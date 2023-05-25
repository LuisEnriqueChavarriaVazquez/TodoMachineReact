import React from 'react';
import '../styles/TodoSearch.css'

function TodoSearch(props){

    return (
        <div className='containerSearch'>
            <input 
            placeholder="Escriba el ToDo a buscar..." 
            type='text'
            //El value será el nuevo estado
            value={props.stateProp}
            onChange={(event) => {
                //Llamamos a la función actualizadora del estado...
                //le pasamos el nuevo valor definido por el usuario...
                props.setStateProp(event.target.value);
                console.log(props.stateProp);
            }}
            ></input>
        </div>
    );
}

export { TodoSearch }