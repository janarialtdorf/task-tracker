import { Header } from './components/Header';
import './App.css';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router';
import { HomePage } from './pages/HomePage';
import { TasksPage } from './pages/TasksPage';
import { TaskDetailsPage } from './pages/TaskDetailsPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { getTasks } from './services/TaskApi';

function App() {
  const [filter, setFilter] = useState('all');
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let cancelled = false;

    async function loadTasks() {
      try {
        setLoading(true);
        setError('');

        const loadedTasks = await getTasks();

        if (!cancelled) {
          setTasks(loadedTasks);
        }
      } catch (error) {
        if (!cancelled) {
          setError(error.message);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadTasks();

    return () => {
      cancelled = true;
    };
  }, []);

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
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/tasks"
          element={
            <TasksPage
              tasks={tasks}
              filter={filter}
              setFilter={setFilter}
              onAddTask={handleAddTask}
              onToggle={handleToggleTask}
              onDelete={handleDeleteTask}
              loading={loading}
              error={error}
            />
          }
        />
        <Route
          path="/tasks/:taskId"
          element={<TaskDetailsPage tasks={tasks} />}
        />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
