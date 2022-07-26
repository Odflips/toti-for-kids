import React from "react";
import Footer from "../footer";
import "../App.css"
import MisCursos from '../../assets/img/Cursos4.gif';
import Cursos from '../../assets/img/Cursos3.gif';
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";



const CardEstudante =() => {
   const navigate = useNavigate()
    return(
        <div>
            <Button onClick={()=>{
         localStorage.clear("auth")
         navigate('/estudante')
         }}>Logout</Button>
          <div className="Card-conteiner">
              

              <div className="img-container">
                 <img className="img-card" src={MisCursos} alt='MisCursos'/>
                 <h3>Meus Cursos</h3>
                 <div className="btn-card">
                 <button><Link to='/meusCursos'> Ver Mais</Link></button>
                 </div>
                
              </div>

              <div className="img-container">
                 <img className="img-card" src={Cursos} alt='cursos'/>
                 <h3>Cursos</h3>
                 <div className="btn-card">
                 <button><Link to ='/todosOsCursos'>Ver Mais</Link></button>
                 </div>
                
              </div>
           
         </div>
            
            <Footer />
    </div>
    )
}

export default CardEstudante;