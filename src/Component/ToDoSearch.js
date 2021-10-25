import React from "react";
import "../styles/ToDoSearch.css";
import { IoIosSearch } from "react-icons/io";
import { ToDoContext } from "../ToDoContext";





function ToDoSearch () {
const {searchValue, setSearchValue} = React.useContext(ToDoContext);
    

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