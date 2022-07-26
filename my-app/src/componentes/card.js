import React from "react";
import Footer from "./footer";
import "./App.css"
import Estudante from '../assets/img/Cursos1.gif';
import Profesor from '../assets/img/Cursos2.gif';
import Cursos from '../assets/img/Cursos3.gif';
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";



const Card=() => {
   const navigate = useNavigate()
  
    return(
        <div>
          <Button onClick={()=>{
         localStorage.clear("auth")
         navigate('/loginAdministrador')
         }}>Logout</Button>
          <div className="Card-conteiner">
              <div className="img-container">
                 <img className="img-card" src={Estudante} alt='estudante'/>
                 <h3>Estudante</h3>
                 <div className="btn-card">
                 <button><Link to='/administradorEstudantes'>Ver Mais</Link></button>
                 </div>
                 
              </div>

              <div className="img-container">
                 <img className="img-card" src={Profesor} alt='Professor'/>
                 <h3>Professor</h3>
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