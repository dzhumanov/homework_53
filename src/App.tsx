import './App.css';
import React, {useState} from "react";
import Task from './Task/Task';
import TaskForm from './AddTaskForm/AddTaskForm';

interface Task {
  text: string;
  key: string;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([
    {text: 'Walk a dog',  key: '1'},
    {text: 'Do a homework', key: '2'},
    {text: 'Buy a bread', key: '3'},
  ]);

  const deleteTask = (keyToDelete:string) => {
    const updatedTasks = tasks.filter(task => task.key !== keyToDelete);
    setTasks(updatedTasks);
  };

  const addTask = () => {   
    const lastKey = tasks.length > 0 ? parseInt(tasks[tasks.length - 1].key): 0;
    const newTask = {
      text: inputValue,
      key: (lastKey + 1).toString(),
    };
    setTasks([...tasks, newTask]);
    setInputValue('');
  };

  const [inputValue, setInputValue] = useState('');

  const textEdit = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  let taskList = tasks.map((task) => {
    return (
      <Task 
        text={task.text}
        key={task.key}
        onDelete={() => deleteTask(task.key)}
      />
    );
  });

  return (
    <div className='container'>
      <TaskForm onTextEdit={textEdit} addTask={addTask} inputValue={inputValue}/>
      {taskList}
    </div>
    );
};

export default App;
