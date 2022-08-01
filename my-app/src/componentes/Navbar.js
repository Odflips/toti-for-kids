import React from "react";
import { Link } from "react-router-dom";
import logo  from "../assets/img/logo.png"
import "./App.css"
import "./hamburguer.css"
import Hamb from "./menuHamb"
import {useState} from 'react'




const NavBar =() => {

  const [open, setOpen] = useState(false);


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


      <div onClick={() => setOpen(!open)} className="hambu1">
       <div className="hamb1"/>
       <div className="hamb1"/>
       <div className="hamb1"/>
       </div>


       {open && <Hamb />}




       
      </header>
    )
}
export default NavBar;