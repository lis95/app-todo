import React from 'react';
import ReactDOM from 'react-dom';
import "../styles/ModalToDo.css";

function ModalToDo({ children }) {
  return ReactDOM.createPortal(
    <div className="ModalBackground">
      {children}
    </div>,
    document.getElementById('modal')
  );
}

export { ModalToDo };