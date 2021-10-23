import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const ToDoContext = React.createContext() 
    function ToDoProvider(props) {
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
        return(
            <ToDoContext.Provider value={{
                loading,
                error,
                totalToDos,
                completedToDos,
                searchValue,
                setSearchValue,
                searchedToDos,
                completeToDo,
                deleteToDo
            }}>
                 {props.children}
            </ToDoContext.Provider>
        )
    }

    export { ToDoContext, ToDoProvider }