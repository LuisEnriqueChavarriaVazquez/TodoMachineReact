function TodoCounter(props){
    return(
        <h1>Has completado {props.total} de {props.completed} TODOS</h1>
    );
}

export { TodoCounter }