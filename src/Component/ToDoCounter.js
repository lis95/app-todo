import React from "react";
import '../styles/ToDoCounter.css';

function ToDoCounter ({completed, total}) { //recibe las props del componente ToDoCouter 
    return(                                 //que a su vez, este recibe un calculo de total de tareas y tareas completadas. 
        <h2 className="ToDoCounter">Has completado {completed} de {total} tareas</h2>
    );
}

export {ToDoCounter}; 