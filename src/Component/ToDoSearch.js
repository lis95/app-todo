import React from "react";
import "../styles/ToDoSearch.css";
import { IoIosSearch } from "react-icons/io"
import { ToDoContext } from '../ToDoContext';





function ToDoSearch () {
   const { searchValue, setSearchValue } = React.useContext(ToDoContext);

    const onSearch = (event) => {
        setSearchValue(event.target.value)
    }
    return (
        <div className="ToDoSearch">
            <IoIosSearch />
            <input 
                className="ButtonSearch" 
                placeholder="Search"
                onChange={onSearch} 
                value={searchValue}
            />
        </div>
        
    );
}

export {ToDoSearch}