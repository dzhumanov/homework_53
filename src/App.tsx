import './App.css'
import React, {useState} from "react";
import Task from './Task/Task';

function App() {
  interface Task

  const [tasks, setTasks] = useState<Task[]>([
    {text: 'Walk a dog',  key: 1},
    {text: 'Do a homework', key: 2},
    {text: 'Buy a bread', key: 3},
  ]);

  return (
    <div></div>
    )
}

export default App
