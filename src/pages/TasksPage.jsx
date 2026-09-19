import { TaskCard } from '../components/TaskCard';
import { TaskForm } from '../components/TaskForm';

export function TasksPage({
  tasks,
  filter,
  setFilter,
  onAddTask,
  onToggle,
  onDelete,
  error,
  loading,
}) {
  let filteredTasks = tasks;

  if (filter === 'completed') {
    filteredTasks = tasks.filter((task) => task.completed);
  }

  if (filter === 'not completed') {
    filteredTasks = tasks.filter((task) => !task.completed);
  }

  return (
    <div>
      <h2>Tasks</h2>

      <TaskForm onAddTask={onAddTask} />

      <div>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
        <button onClick={() => setFilter('not completed')}>
          Not Completed
        </button>
      </div>

      {loading && <p>Loading tasks...</p>}

      {!loading && filteredTasks.length === 0 && <p>No tasks found</p>}
      {error && <p>{error}</p>}

      {filteredTasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
