import React from "react";
import "../styles/ToDoList.css";
import task from "../img/task.png";


function ToDoList(props) {
    return(

        <div className="Box">
            <img className="imageTask" src={task} alt="all"/>            
            <section  className="Container_list">
                <ul className="ToDoList">
                    {props.children}
                </ul>
            </section>
        </div>
  
        

    );
}

export {ToDoList};