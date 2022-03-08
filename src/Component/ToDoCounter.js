import React from "react";
import '../styles/ToDoCounter.css';
import { ToDoContext } from "../ToDoContext";

function ToDoCounter () { 
    const {completedToDos, totalToDos} = React.useContext(ToDoContext)
    return(                               
        <h2 className="ToDoCounter">Has completado {completedToDos} de {totalToDos} tareas</h2>
    );
}

export {ToDoCounter}; 