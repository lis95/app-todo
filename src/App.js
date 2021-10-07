import './App.css';
import React from 'react'
import { ToDoCounter } from './Component/ToDoCounter';
import { ToDoSearch } from './Component/ToDoSearch';
import { ToDoList } from './Component/ToDoList';
import { ToDoItem } from './Component/ToDoItem';
import {ToDoButton} from './Component/ToDoButton';
import { HeaderToDo } from './Component/HeaderToDo';


const defaulttoDos = [
  {text: 'Estudiar React', completed: false},
  {text: 'Trabajar', completed: true},
  {text: 'Cocinar', completed: true},
  {text: 'Lavar la Ropa', completed: false},
  {text: 'Lavarme el cabello', completed: true},
  {text: 'Arreglarme las uñas', completed: false},
  {text: 'Ordenar mi cuarto', completed: false},
  {text: 'Planchar la camisa', completed: false},
  {text: 'Comprar comida', completed: false},
  {text: 'Limpiar la casa', completed: false}

]
function App() {
  const [toDos, setTodo] = React.useState(defaulttoDos)
  const [searchValue, setSearchValue] = React.useState('')


  const completedToDos = toDos.filter(toDos => !!toDos.completed).length; //cantidad de tareas completadas
  const totalToDos = toDos.length; //total de tareas

  let searchedToDos = []

  if(!searchValue.length >=1) { //=>/si el usuario no ha indroducido ningun valor
    searchedToDos = toDos;      //=> se mostraran todos los item
  } else{
    searchedToDos = toDos.filter(toDo => { //sino, apareceran los unicos que coincidan
                                            //con las letras que el usurio vaya introduciendo
      const todoText = toDo.text.toLowerCase();  //busqueda con mayusculas o minusculas.
      const searchText = searchValue.toLowerCase();   
      return todoText.includes(searchText); 
    })
  }
/*------- Marcar tareas completadas--------*/
  const completeToDo = (text) => {
    const toDoIndex = toDos.findIndex(toDo => toDo.text === text); //busca el index con el texto, lo compara y ubica
    const newToDos = [...toDos]; //todas las tareas que tenia originalmente
    newToDos[toDoIndex].completed = true; //manipula sus atributos.
    setTodo(newToDos) //Actualiza el estado con los cambios realizados

  }
   /*--------Eliminando tareas------------*/
   const deleteToDo = (text) => {
    const toDoIndex = toDos.findIndex(toDo => toDo.text === text); //busca el index con el texto, lo compara y ubica
    const newToDos = [...toDos]; //todas las tareas que tenia originalmente
    newToDos.splice(toDoIndex, 1) //manipula sus atributos.
    setTodo(newToDos) //Actualiza el estado con los cambios realizados
  }

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

export default App;
