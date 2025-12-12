import { useState } from 'react';

export default function TodoInput({ onAdd }) {
    const [text, setText] = useState('');

    const handleSubmit = () => {
        if (text.trim()) {
            onAdd(text);
            setText('');
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    };

    return (
        <div className="input-group">
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Add a new task..."
                aria-label="New task input"
            />
            <button className="add-btn" onClick={handleSubmit} aria-label="Add task button">Add</button>
        </div>
    );
}
