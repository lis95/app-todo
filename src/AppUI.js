import React from "react";
import { ToDoCounter } from './Component/ToDoCounter';
import { ToDoSearch } from './Component/ToDoSearch';
import { ToDoList } from './Component/ToDoList';
import { ToDoItem } from './Component/ToDoItem';
import {ToDoButton} from './Component/ToDoButton';
import { HeaderToDo } from './Component/HeaderToDo';


function AppUI({
      totalToDos,
      completedToDos,
      searchValue,
      setSearchValue,
      searchedToDos,
      completeToDo,
      deleteToDo,
}) {
    return (
        <React.Fragment>
            <HeaderToDo/>
            
            <ToDoCounter
                total ={totalToDos}
                completed={completedToDos}
            />  
            
            <ToDoSearch 
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            />

            <ToDoList>
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
            
            <ToDoButton/>    
    </React.Fragment>

    );
}

export { AppUI }