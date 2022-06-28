import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from "react"

const App = () => {
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

//Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

  return (
    <div className="container">
      <Header title='Task Tracker'/>
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  ); 
}
   
export default App;
