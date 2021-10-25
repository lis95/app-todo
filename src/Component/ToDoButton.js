import React from "react";
import "../styles/ToDoButton.css";

function ToDoButton (props) {
    const onClickButton = (msj) => {
        props.setOpenModal(prevState => !prevState);
    }
    return(
        <button 
        className="TodoButton"
        onClick={onClickButton}
        >
            +
        </button>
    );
}

export {ToDoButton};