import './App.css';
import React from 'react'
import { AppUI } from './AppUI';


/*const defaulttoDos = [
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
*/

/*--------------CustomHooks------------------*/
function useLocalStorage(ItemName, initialValue) {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [item, setItem] = React.useState(initialValue)        
  /*-------------UseEffect--------------------------*/
  React.useEffect(()=>{
    setTimeout(()=>{
  /*-------creacion de localStorage--------*/
      try{
        const localStorageItem = localStorage.getItem(ItemName); 
        let parsedItem;

        if (!localStorageItem){
          localStorage.getItem(ItemName, JSON.stringify(initialValue));
          parsedItem = initialValue; 
        } else {
          parsedItem = JSON.parse(localStorageItem)
        }
        setItem(parsedItem);
        setLoading(false);
        }catch(err){
          setError(true)
        }
      
    }, 1000)
  }, [])
  


/*-------Guardando las tareas-------*/
  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem); 
      localStorage.setItem(ItemName, stringifiedItem)
      setItem(newItem);
    } catch (error) {
      setError(true)
    }
  };
  return{ 
    item,
    saveItem,
    loading,
    error,
 };
}
function App() {
  const {
    item: toDos,
    saveItem: saveToDos,
    loading,
    error,
   } = useLocalStorage('ToDos_V1', [])



/*---Estados de la app----*/
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
    saveToDos(newToDos) //Actualiza el estado con los cambios realizados

  }
   /*--------Eliminando tareas------------*/
   const deleteToDo = (text) => {
    const toDoIndex = toDos.findIndex(toDo => toDo.text === text); //busca el index con el texto, lo compara y ubica
    const newToDos = [...toDos]; //todas las tareas que tenia originalmente
    newToDos.splice(toDoIndex, 1) //manipula sus atributos.
    saveToDos(newToDos) //Actualiza el estado con los cambios realizados
  }

  return (
    <AppUI
      loading={loading}
      error={error}
      totalToDos={totalToDos}
      completedToDos={completedToDos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedToDos={searchedToDos}
      completeToDo={completeToDo}
      deleteToDo={deleteToDo}

    />
     


      );
}

export default App;
