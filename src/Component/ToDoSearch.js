import React from "react";
import "../styles/ToDoSearch.css";
import { IoIosSearch } from "react-icons/io"




function ToDoSearch () {
    return(
        <div className="ToDoSearch">
            <IoIosSearch />
            <input className="ButtonSearch"placeholder="Search"/>
        </div>
    );
}

export {ToDoSearch}