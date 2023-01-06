import React, {useState} from 'react';
import './style.css';

import Navbar from "./components/Navbar/Navbar";
import TaskLista from './components/TaskList/TaskList';

const task = {
  id:0,
  title: "Nova Tarefa",
  state: "pendente"
}

let idAcc = 0;
const gerarId = () => {
  idAcc = idAcc +1;
  return idAcc;
}

export default function App(){

  const [tasks, setTasks] = useState([]);

  const addTask = (title, state) => {
    const newTask ={
      id: gerarId(),
      title,
      state
    };
    setTasks((existingTasks)=>{
      return [...existingTasks, newTask];
    })
  }

  return (
    <div className='App'>
      <Navbar />
      <div className='container'>
        <TaskLista title="Pendente" onAddTask={addTask} tasks={tasks}/>
      </div>
    </div>
  );
}


