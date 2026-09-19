import { TaskForm } from '../components/TaskForm';
import { TaskList } from '../components/TaskList';
import { PageSection } from '../components/PageSection';

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

      <PageSection title="My tasks">
        <TaskList
          tasks={filteredTasks}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      </PageSection>
    </div>
  );
}
