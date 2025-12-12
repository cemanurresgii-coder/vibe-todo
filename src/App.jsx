import { useState, useEffect } from 'react'
import TodoInput from './components/TodoInput'
import TodoItem from './components/TodoItem'
import Stats from './components/Stats'
import './App.css'

function App() {
    const [todos, setTodos] = useState(() => {
        const saved = localStorage.getItem('todoList');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('todoList', JSON.stringify(todos));
    }, [todos]);

    const addTodo = (text) => {
        const newTodo = {
            id: Date.now(),
            text,
            completed: false
        };
        setTodos([...todos, newTodo]);
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const toggleTodo = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    return (
        <div className="container">
            <h1>📝 Vibe Todo</h1>

            <TodoInput onAdd={addTodo} />

            {todos.length === 0 ? (
                <div className="empty-state">
                    <p>✨ No tasks yet. Create one to get started!</p>
                </div>
            ) : (
                <ul className="todo-list">
                    {todos.map(todo => (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            onDelete={deleteTodo}
                            onToggle={toggleTodo}
                        />
                    ))}
                </ul>
            )}

            <Stats todos={todos} />
        </div>
    )
}

export default App
