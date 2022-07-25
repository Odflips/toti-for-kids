import React from "react";
import Footer from "./footer";
import "./App.css"
import Curso from '../assets/img/curso1.png';

const dashboardProf= () => {
    return(
        <div className="dashP">

            <h1>Bem-vindo a Turma 1</h1>
            <div className="alunos">
            <div className="img-txt">
                <img className="aluno-img" src={Curso}/>
                <h3>Nome do Aluno</h3>
                <h3>E-mail</h3>
                </div>
                <div className="BtnProf">
                <button className="btnProf">Editar</button>
                <button className="btnProf">Eliminar</button>
                </div>


            </div>

            <div className="alunos">
            <div className="img-txt">
                <img className="aluno-img" src={Curso}/>
                <h3>Nome do Aluno</h3>
                <h3>E-mail</h3>
                </div>
                <div className="BtnProf">
                <button className="btnProf">Editar</button>
                <button className="btnProf">Eliminar</button>
                </div>


            </div>

            <div  className="alunos">
                <div className="img-txt">
                <img className="aluno-img"  src={Curso}/>
                <h3>Nome do Aluno</h3>
                <h3>E-mail</h3>
                </div>
                <div className="BtnProf">
                <button className="btnProf">Editar</button>
                <button className="btnProf">Eliminar</button>
                </div>


            </div>


          <Footer />
         </div>


    )
} 
export default dashboardProf;