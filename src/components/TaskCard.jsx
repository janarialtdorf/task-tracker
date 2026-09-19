import { Link } from 'react-router';

export function TaskCard({ task, onToggle, onDelete }) {
  return (
    <div className="task-card">
      <h2>
        <Link to={`/tasks/${task.id}`}>{task.title}</Link>
      </h2>
      <p>{task.completed ? 'Completed' : 'Not completed'}</p>
      <button onClick={() => onToggle(task.id)}>Toggle completion</button>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
}
