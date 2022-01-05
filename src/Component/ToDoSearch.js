import React from "react";
import "../styles/ToDoSearch.css";
<<<<<<< HEAD
import { IoIosSearch } from "react-icons/io"
import { ToDoContext } from '../ToDoContext';
=======
import { IoIosSearch } from "react-icons/io";
import { ToDoContext } from "../ToDoContext";
>>>>>>> main





function ToDoSearch () {
<<<<<<< HEAD
   const { searchValue, setSearchValue } = React.useContext(ToDoContext);
=======
const {searchValue, setSearchValue} = React.useContext(ToDoContext);
    
>>>>>>> main

    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value)
    }
    return (
        <div className="ToDoSearch">
            <IoIosSearch />
            <input 
                className="ButtonSearch" 
                placeholder="Search"
                onChange={onSearchValueChange} 
                value={searchValue}
            />
        </div>
        
    );
}

export {ToDoSearch}