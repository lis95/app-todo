import React from "react";
import { ToDoContext} from "../ToDoContext";
import "../styles/ToDoForm.css";

function ToDoForm () {
    const [NewToDoValue, setNewToDoValue] = React.useState('');
    const {
        addToDo,
        setOpenModal,
    } = React.useContext(ToDoContext)
    
    const onChange = (event) => {
        setNewToDoValue(event.target.value);
    };

    
    const onCancel = () => {
        setOpenModal(false);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        addToDo(NewToDoValue)
        setOpenModal(false);
    }

    return (
        <React.Fragment>
            <form onSubmit={onSubmit} className="FormTask">
                <label className="NewTask">Nueva Tarea</label>
                <textarea className="WriteTask"
                    value={NewToDoValue}
                    onChange={onChange}
                    placeholder="Escribe una Nueva Tarea"
                >
                </textarea>
                <div>
                    <button className="Button_Cancelar"
                        onClick={onCancel}
                    >
                        Cancelar
                    </button>
                    <button className="Button_Agregar"
                        type="submit"
                        disabled={!NewToDoValue} 
                    >
                        Agregar
                    </button>
                </div>
            </form>
          
        </React.Fragment>
    );
}

export { ToDoForm };