import React from 'react';
import "./taskList.css";
import { useState } from "react";
import PropTypes from 'prop-types';



export default function TaskLista({title}){
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount((currentCount)=>{
            return currentCount + 1;
        })
    }

    return(
        <div className='taskList'>
 
            <div className='title'>{title}</div>
            <div className='content'>
                {count}
                <button onClick={increment}>Incrementar</button>
            </div>
        </div>
    )
}

TaskLista.propTypes = {
    title: PropTypes.string.isRequired
}
//props são imutáveis usadas para renderizar elementos
//Definir o tipo das props e assim evitar erros de desenvolvimento