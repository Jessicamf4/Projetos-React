import React from 'react';
import "./taskList.css";

import PropTypes from 'prop-types';

import TaskItem from '../TaskItem/TaskItem';


export default function TaskLista({title, onAddTask, tasks}){

    const addTask = () => {
        onAddTask("Nova Tarefa", "Pendente");
    };

    return(
        <div className='taskList'>
            <div className='title'>{title}</div>
            <div className='content'>
                {tasks.map((task)=>{
                    return (
                        <TaskItem key={task.id} id={task.id} title={task.title} taskState={task.state} />
                    )
                })}
            </div>
            <button onClick={addTask}>Adicionar Tarefa</button>;
        </div>
    )
}

TaskLista.propTypes = {
    title: PropTypes.string.isRequired,
    onAddTask: PropTypes.func.isRequired,
    tasks: PropTypes.array.isRequired
}
//props são imutáveis usadas para renderizar elementos
//Definir o tipo das props e assim evitar erros de desenvolvimento