import { Header } from './components/Header';
import './App.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router';
import { HomePage } from './pages/HomePage';
import { TasksPage } from './pages/TasksPage';
import { TaskDetailsPage } from './pages/TaskDetailsPage';
import { NotFoundPage } from './pages/NotFoundPage';

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
