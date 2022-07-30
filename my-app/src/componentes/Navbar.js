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
            <Link className="menu" to="/loginAdministrador" >Administrador</Link>
          </div>
         <div className="Item-menu">
           <Link className="menu" to="/estudante" >Estudante</Link>
        </div>
        <div className="Item-menu">
         <Link className="menu" to="/professor" > Professor</Link>
        </div>
        <div className="Item-menu">
           <Link className="menu" to="/">Home</Link>
        </div>
    </div>
      </header>
    )
}
export default NavBar;