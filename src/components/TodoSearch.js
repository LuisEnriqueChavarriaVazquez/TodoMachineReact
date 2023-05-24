import '../styles/TodoSearch.css'

function TodoSearch(){
    return (
        <div className='containerSearch'>
            <input placeholder="Escriba el ToDo a buscar..." type='text'></input>
        </div>
    );
}

export { TodoSearch }