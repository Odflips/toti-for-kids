import React from "react";
import Footer from "./footer";
import "./App.css"
import MisCursos from '../assets/img/Cursos4.gif';
import Cursos from '../assets/img/Cursos3.gif';
import { Link } from "react-router-dom";



const Card=() => {
    return(
        <div>
          <div className="Card-conteiner">
              

              <div className="img-container">
                 <img className="img-card" src={MisCursos} alt='Professor'/>
                 <h3>Meus Cursos</h3>
                 <div className="btn-card">
                 <button><Link to='/administradorProfessores'> Ver Mais</Link></button>
                 </div>
                
              </div>

              <div className="img-container">
                 <img className="img-card" src={Cursos} alt='cursos'/>
                 <h3>Cursos</h3>
                 <div className="btn-card">
                 <button><Link to ='/administradorCursos'>Ver Mais</Link></button>
                 </div>
                
              </div>

         </div>
            
            <Footer />
    </div>
    )
}

export default Card;