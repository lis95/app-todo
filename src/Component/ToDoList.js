import React from "react";
import "../styles/ToDoList.css";
import task from "../img/task.png";


function ToDoList(props) {
    return(

        <div>
            <img className="imageTask" src={task} alt="all"/>            
            <section  className="Caja">
                <ul className="ToDoList">
                    {props.children}
                </ul>
            </section>
        </div>
  
        

    );
}

export {ToDoList};