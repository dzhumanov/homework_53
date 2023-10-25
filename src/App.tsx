import './App.css'
import React, {useState} from "react";
import Task from './Task/Task';
import TaskForm from './AddTaskForm/AddTaskForm'

function App() {
  const [tasks, setTasks] = useState<Task[]>([
    {text: 'Walk a dog',  key: '1'},
    {text: 'Do a homework', key: '2'},
    {text: 'Buy a bread', key: '3'},
  ]);

  let taskList = tasks.map((task) => {
    return (
      <Task 
        text={task.text}
        key={task.key}
      />
    );
  });

  const [currentTask, setCurrentTask] = useState<Task[]>([
    {text: '', key: tasks[tasks.length - 1].key}
  ]);

  const textEdit = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newText = event.target.value;
    setCurrentTask([
      {
        ...currentTask[0],
       text: newText
      }
  ]);
};

  const addTask = () => {   
    const lastKey = parseInt(tasks[tasks.length - 1].key);
    const newTask = {
      text: currentTask[0].text,
      key: (lastKey + 1).toString(),
    };
    setTasks([...tasks, newTask]);
    setCurrentTask([{ text: '', key: (lastKey + 1).toString() }]);
};

  return (
    <div className='container'>
      <TaskForm onTextEdit={textEdit} addTask={addTask}/>
      {taskList}
    </div>
    )
}

export default App
