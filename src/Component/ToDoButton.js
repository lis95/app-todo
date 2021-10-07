import React from "react";
import "../styles/ToDoButton.css";

function ToDoButton (props) {
    const onClickButton = (msj) => {
        alert(msj)
    }
    return(
        <button 
        className="TodoButton"
        onClick={() => onClickButton('aqui deberia haber un modal')}
        >
            +
        </button>
    );
}

export {ToDoButton};