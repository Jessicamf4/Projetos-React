import React from 'react';
import './style.css';

import Navbar from "./components/Navbar/Navbar";
import TaskLista from './components/TaskList/TaskList';

export default function App(){
  return (
    <div className='App'>
      <Navbar />
      <div className='container'>
        <TaskLista title="Pendente"/>
        <TaskLista title="Fazendo" />
        <TaskLista title="Completo"/>
      </div>
    </div>
  );
}


