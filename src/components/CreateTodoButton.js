import '../styles/CreateTodoButton.css';

function CreateTodoButton(){
    return (
        <div className="containerButton">   
            <button onClick={(event) => {
                console.log("Presionando el boton");
                console.log(event);
                console.log(event.target);
                console.log(event.target.innerHTML)
            }}>
            <span 
            className="material-symbols-outlined">add</span>
            </button>
        </div>
    );
}

export { CreateTodoButton }