import '../styles/TodoItem.css';

function TodoItem(props){
    return (
      <li>
        <span className={`material-symbols-outlined ${props.completed && "active-done-icon"}`}>done</span>
        <p className={`${props.completed && "active-done-activity"}`}>{props.text}</p>
        <span className='material-symbols-outlined'>delete</span>
      </li>
    );
  }

export { TodoItem }