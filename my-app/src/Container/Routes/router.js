import React from "react"
import {
   BrowserRouter,
   Routes,
   Route,


} from "react-router-dom";
import Home from "../../home";
import LoginProfessor from "../../componentes/loginProfessor";
import NavBar from "../../componentes/Navbar";
import LoginEstudante from "../../componentes/loginEstudante";
import CadastroEstudante from "../../componentes/cadastroEstudante";
import DashboardProf from "../../componentes/dashboardProf";
import Administrador from "../../componentes/administrador";
import CadastroEstudantes from "../../componentes/cadastroEstudantes";
import LoginAdministrador from "../../componentes/loginAdministrador";

const Router = () => {
   return (
      <BrowserRouter>
         <NavBar />
         <Routes >

            <Route exact path="/" element={<Home />} />
            <Route exact path="/professor" element={<LoginProfessor />} />
            <Route exact path="/estudante" element={<LoginEstudante />} />
            <Route exact path="/cadastroEstudante" element={<CadastroEstudante />} />
            <Route exact path="/dashboardProf" element={<DashboardProf />} />
            <Route exact path="/administrador" element={<Administrador />} />
            <Route exact path="/loginAdministrador" element={<LoginAdministrador />} />
            

           
            




         </Routes>



      </BrowserRouter>

   )
}

export default Router;