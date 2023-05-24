import '../styles/TodoCounter.css'

function TodoCounter(props){
    return(
        <h1 className='mainCounter'>Has completado 
        <span> {props.completed} </span> de 
        <span> {props.total} </span> ToDos</h1>
    );
}

export { TodoCounter }