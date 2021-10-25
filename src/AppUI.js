import React from "react";
import { ToDoContext } from "./ToDoContext";
import { ToDoCounter } from './Component/ToDoCounter';
import { ToDoSearch } from './Component/ToDoSearch';
import { ToDoList } from './Component/ToDoList';
import { ToDoItem } from './Component/ToDoItem';
import {ToDoButton} from './Component/ToDoButton';
import { HeaderToDo } from './Component/HeaderToDo';
import { ModalToDo } from './Component/ModalToDo';
import {ToDoForm} from './Component/ToDoForm';

function AppUI() {
    const {
        error, 
        loading, 
        searchedToDos, 
        completeToDo, 
        deleteToDo, 
        openModal, 
        setOpenModal
    } = React.useContext(ToDoContext);
    return (
        <React.Fragment>
            <HeaderToDo/>
            
            <ToDoCounter/>  
            
            <ToDoSearch/>

            <ToDoList>
                {loading && <p>cargando informacion</p>}
                {error && <p>hubo un error</p>}
                {(!loading && !searchedToDos.length) && <p>crea tu primer To Do</p>}
                    
                {searchedToDos.map(toDos => (  
                    <ToDoItem 
                        key={toDos.text} 
                        text= {toDos.text} 
                        completed={toDos.completed}
                        onCompleted={() => completeToDo(toDos.text)}
                        onDelete={() => deleteToDo(toDos.text)}
                    />
                  ))}   
                </ToDoList>
                {!!openModal && (
                   <ModalToDo>
                       <ToDoForm>

                       </ToDoForm>
                   </ModalToDo>  
                )}
            <ToDoButton
            setOpenModal={setOpenModal}
            /> 
          
    </React.Fragment>

    );
}

export { AppUI }