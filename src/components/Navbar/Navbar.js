import React from "react";
import "./navbar.css";

//export: disponível para toda aplicação

export default function Navbar(){
    return(
        <nav className="navbar">
            <span>React Kanban</span>
        </nav>
    );
}