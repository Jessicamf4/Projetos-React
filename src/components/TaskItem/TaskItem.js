import React, {useState} from "react";
import PropTypes from 'prop-types';

export default function TaskItem({id, title, taskState}){

    

    return <div>{title}</div>
}

TaskItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.func.isRequired,
    taskState: PropTypes.array.isRequired
}