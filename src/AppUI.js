import React from "react";
import { ToDoContext } from "./ToDoContext";
import { ToDoCounter } from './Component/ToDoCounter';
import { ToDoSearch } from './Component/ToDoSearch';
import { ToDoList } from './Component/ToDoList';
import { ToDoItem } from './Component/ToDoItem';
import {ToDoButton} from './Component/ToDoButton';
import { HeaderToDo } from './Component/HeaderToDo';


function AppUI() {
    return (
        <React.Fragment>
            <HeaderToDo/>
            
            <ToDoCounter/>  
            
            <ToDoSearch/>

            <ToDoContext.Consumer>
                {({
                    error, 
                    loading, 
                    searchedToDos, 
                    completeToDo, 
                    deleteToDo
                }) => (
                    <ToDoList>
                    {error && <p>hubo un error</p>}
                    {loading && <p>cargando informacion</p>}
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
                )}
            </ToDoContext.Consumer>
            
            <ToDoButton/>    
    </React.Fragment>

    );
}

export { AppUI }