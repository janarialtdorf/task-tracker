import { TaskCard } from './TaskCard';

export function TaskList({ tasks, onToggle, onDelete }) {
  return (
    <>
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </>
  );
}
