export default function TodoItem({ todo, onDelete, onToggle }) {
    return (
        <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
                aria-label={`Mark task as ${todo.completed ? 'incomplete' : 'complete'}`}
            />
            <span className="todo-text">{todo.text}</span>
            <button className="delete-btn" onClick={() => onDelete(todo.id)}>Delete</button>
        </li>
    );
}
