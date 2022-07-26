import React from "react";
import Footer from "./footer";
import "./App.css"
import Curso from '../assets/img/curso1.png';
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const DashboardProf= () => {
    const navigate= useNavigate()
    return(
        <div className="dashP">
               <Button onClick={()=>{
         localStorage.clear("auth")
         navigate('/professor')
         }}>Logout</Button>

            <h1>Bem-vindo a Turma 1</h1>
            <div className="alunos">
            <div className="img-txt">
                <img className="aluno-img" src={Curso} alt="foto do aluno"/>
                <h3>Nome do Aluno</h3>
                <h3>E-mail</h3>
                </div>
                <div className="BtnProf">
                <button className="btnProf">Editar</button>
               
                </div>


            </div>

            <div className="alunos">
            <div className="img-txt">
                <img className="aluno-img" src={Curso} alt="foto do aluno"/>
                <h3>Nome do Aluno</h3>
                <h3>E-mail</h3>
                </div>
                <div className="BtnProf">
                <button className="btnProf">Editar</button>
                
                </div>


            </div>

            <div  className="alunos">
                <div className="img-txt">
                <img className="aluno-img"  src={Curso} alt="foto do aluno"/>
                <h3>Nome do Aluno</h3>
                <h3>E-mail</h3>
                </div>
                <div className="BtnProf">
                <button className="btnProf">Editar</button>
               
                </div>

                
            </div>

            <Button className='btn btn-secodary'><Link to='/professor'> Voltar</Link></Button>
     
          <Footer />
         </div>


    )
} 
export default DashboardProf;