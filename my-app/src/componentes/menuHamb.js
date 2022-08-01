import React from "react";
import "./hamburguer.css"
import { Link } from "react-router-dom";


const MenuHamb=() =>{
    return(
        <div className="hamburguer">
          <div className="Item-menu2">
            <Link className="menu2" to="/loginAdministrador" >Administrador</Link>
          </div>
         <div className="Item-menu2">
           <Link className="menu2" to="/estudante" >Estudante</Link>
          </div>
          <div className="Item-menu2">
         <Link className="menu2" to="/professor" > Professor</Link>
         </div>
          <div className="Item-menu2">
           <Link className="menu2" to="/">Home</Link>
          </div>
       </div>
    )
}

export default MenuHamb;