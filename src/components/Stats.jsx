export default function Stats({ todos }) {
    const total = todos.length;
    const completed = todos.filter(t => t.completed).length;
    const remaining = total - completed;

    return (
        <div className="stats">
            <div className="stat">
                <span className="stat-number">{total}</span>
                <span>Total</span>
            </div>
            <div className="stat">
                <span className="stat-number">{completed}</span>
                <span>Completed</span>
            </div>
            <div className="stat">
                <span className="stat-number">{remaining}</span>
                <span>Remaining</span>
            </div>
        </div>
    );
}
