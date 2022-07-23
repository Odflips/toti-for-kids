import React from "react";
import { Link } from "react-router-dom";
import logo  from "../assets/img/logo.png"
import "./App.css"




const NavBar =() => {
    return(
    <header className="cabeçalho">
        <div className="Logo">
          <img className="img" src={logo}/>
        </div>

    <div className="login">
         <div className="Item-menu">
           <Link to="/estudante" >Estudante</Link>
        </div>
        <div className="Item-menu">
         <Link to="/professor" > Professor</Link>
        </div>
        <div className="Item-menu">
           <Link to="/">Home</Link>
        </div>
    </div>
      </header>
    )
}
export default NavBar;