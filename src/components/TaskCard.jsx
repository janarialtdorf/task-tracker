import { useState } from 'react';

export function TaskCard({ task }) {
  const [completed, setCompleted] = useState(task.completed);

  return (
    <div className="task-card">
      <h2>{task.title}</h2>
      <p>{completed ? 'Completed' : 'Not completed'}</p>
      <button onClick={() => setCompleted(!completed)}>Toggle</button>
    </div>
  );
}
