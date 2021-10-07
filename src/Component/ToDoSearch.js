import React from "react";
import "../styles/ToDoSearch.css";
import { IoIosSearch } from "react-icons/io"




function ToDoSearch ({searchValue, setSearchValue}) {

    

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