import React from "react";
import { ToDoContext} from "../ToDoContext";

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
            <form onSubmit={onSubmit}>
                <label> Nueva Tarea</label>
                <textarea
                    value={NewToDoValue}
                    onChange={onChange}
                    placeholder="ecribe tu Nueva tarea"
                >
                </textarea>
            </form>
            <div>
                <button
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    type="submit"
                >
                    Add
                </button>
            </div>
        </React.Fragment>
    );
}

export { ToDoForm };