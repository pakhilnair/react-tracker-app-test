import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from "react"
import AddTask from './components/AddTask'

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Buy Peanut Butter",
      date: "Jun 27th at 2:30PM",
      reminder: true,
    },
    {
      id: 2,
      text: "Buy Shampoo",
      date: "Sept 27th at 5:30PM",
      reminder: false,
    },
    {
      id: 3,
      text: "Sell Shoes",
      date: "July 4th at 11:00AM",
      reminder: true,
    }
  ])

//Add Task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000 + 1)
  const newTask = {id, ...task }
  setTasks([...tasks, newTask])
}

//Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

//Toggle reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
}

  return (
    <div className="container">
      <Header title='Task Tracker' onAdd={() => setShowAddTask(!showAddTask)}/>
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}
      onToggle={toggleReminder} /> : 'No tasks to show '}
    </div>
  ); 
}
   
export default App;
