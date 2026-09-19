import { useParams } from 'react-router';

export function TaskDetailsPage({ tasks }) {
  const { taskId } = useParams();

  const task = tasks.find((task) => task.id === Number(taskId));

  if (!task) {
    return <p>Task not found</p>;
  }

  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.completed ? 'Completed' : 'Not completed'}</p>
    </div>
  );
}
