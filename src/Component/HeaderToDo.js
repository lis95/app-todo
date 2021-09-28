import React from "react";
import "../styles/HeaderToDo.css";
import logo from "../img/logo.png";

function HeaderToDo () {
    return (

        <div className="HeaderToDo">
           <img className="logo" src={logo} alt=""/>
           <h1 className="HeaderTitle">¡Welcome ToDo's Taks!</h1> 
        </div>
        
    );
}

export {HeaderToDo}

