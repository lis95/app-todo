import './App.css';
import React from 'react'
import { ToDoCounter } from './Component/ToDoCounter';
import { ToDoSearch } from './Component/ToDoSearch';
import { ToDoList } from './Component/ToDoList';
import { ToDoItem } from './Component/ToDoItem';
import {ToDoButton} from './Component/ToDoButton';
import { HeaderToDo } from './Component/HeaderToDo';


const toDos = [
  {text: 'Tarea 1', completed: false},
  {text: 'Tarea 2', completed: true},
  {text: 'Tarea 3', completed: false},
  {text: 'tarea 4', completed: false}

]
function App() {
  return (
    <React.Fragment>

      <HeaderToDo/>
      <ToDoCounter/>  
    
    <ToDoSearch />

    <ToDoList>
      {toDos.map(toDos => (
        <ToDoItem 
        key={toDos.text} 
        text= {toDos.text} 
        completed={toDos.completed}
        />
      ))}   
    </ToDoList>
    
   <ToDoButton/>
 
    
    </React.Fragment>
  );
}

export default App;
