import React from "react";
import "../styles/ToDoItem.css"; 


function ToDoItem(props) {
    return(
        <li className="ToDoItem">
            <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}>✔</span>
                <section>
                    <p className={`ToDoItem-p ${props.completed && 'ToDoItem-p--complete'}`}>{props.text}</p>
                </section>
            <span className="Icon Icon-delete">X</span>    
        </li>
    );
}

export {ToDoItem};