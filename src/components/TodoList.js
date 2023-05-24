import '../styles/TodoList.css';

function TodoList(props){
    return (
        <div className='listContainer'>
            <ul>
                {props.children}
            </ul>
        </div>
    );
}

export { TodoList }