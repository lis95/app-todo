import React from "react";
import "../styles/ToDoItem.css";
import { BiTrash } from 'react-icons/bi';


function ToDoItem(props) {

    return(
        <li className="ToDoItem">
            <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
            onClick={props.onCompleted}
            >
                ✔
            </span>
                <section>
                    <p className={`ToDoItem-p ${props.completed && 'ToDoItem-p--complete'}`}>
                        {props.text}
                    </p>
                </section>
            <span className="Icon Icon-delete"
            onClick={props.onDelete}
            >
                <BiTrash/>
            </span>    
        </li>
    );
}

export {ToDoItem};