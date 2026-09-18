import { Header } from './components/Header'
import { TaskCard } from './components/TaskCard'
import './App.css'

const task1 = {
  id: 1,
  title: 'Learn JSX',
  completed: true,
}

const task2 = {
  id: 2,
  title: 'Practise React state',
  completed: false,
}

function App() {
  return (
    <div>
      <Header />
      <TaskCard task={task1} />
      <TaskCard task={task2} />
    </div>
  )
}

export default App