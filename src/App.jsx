import { Header } from './components/Header';
import { TaskCard } from './components/TaskCard';
import { TaskForm } from './components/TaskForm';
import './App.css';
import { useState } from 'react';

function App() {
  const [filter, setFilter] = useState('all');
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Learn JSX',
      completed: false,
    },
    {
      id: 2,
      title: 'Practise React state',
      completed: false,
    },
    {
      id: 3,
      title: 'Build a Node.js API',
      completed: false,
    },
  ]);

  let filteredTasks = tasks;

  if (filter === 'completed') {
    filteredTasks = tasks.filter((task) => task.completed);
  }

  if (filter === 'not completed') {
    filteredTasks = tasks.filter((task) => !task.completed);
  }

  function handleAddTask(title) {
    setTasks((currentTasks) => [
      ...currentTasks,
      {
        id: currentTasks.length
          ? currentTasks[currentTasks.length - 1].id + 1
          : 1,
        title,
        completed: false,
      },
    ]);
  }

  function handleToggleTask(taskId) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task,
      ),
    );
  }

  function handleDeleteTask(taskId) {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== taskId),
    );
  }

  return (
    <div>
      <Header />
      <TaskForm onAddTask={handleAddTask} />
      <div>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
        <button onClick={() => setFilter('not completed')}>
          Not Completed
        </button>
      </div>
      {filteredTasks.length === 0 && <p>No tasks found</p>}

      {filteredTasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onToggle={handleToggleTask}
          onDelete={handleDeleteTask}
        />
      ))}
    </div>
  );
}

export default App;
