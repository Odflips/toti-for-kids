import React from "react";
import { Container,FormControl,FormGroup} from "react-bootstrap"
import { Link } from "react-router-dom";
import "./style.css"
import Footer from "./footer.js"
import mascota from "../assets/img/mascota.png"
import { useState } from "react";
import axios from 'axios';



const LoginAdministrador =() =>{

  const [login, setLogin] = useState({usuario:'', senha:''});

  const inputLogin = ({ target }) => {
    const { name, value } = target
    setLogin({
      ...login,
      [name]:value
    })
  }
  

  const onSubmit = () => {

    axios.post('http://localhost:3002/api/validacion', login)
      .then(({ data }) => {
      console.log(data)
      })
      .catch(({ response }) => {
      console.log(response)
    })
    
  }
      

    return (
        <div className="conteiner">
           
           <Container className="bodyLoginE"> 
         
        
            <div className="loginE">
              <div>
                <h1 className="titulo">Sign in</h1>
               
                <p className="subtitulo">Transforme o Mundo</p>
                <img className="robotPrincipal"src={mascota}/>
             
              </div>
              
           
          
             
             
             <form className="sem-conta" >
             

                <FormGroup className="mb-2 ">
                    <FormControl
                      className="input"
                      type="text"
                      name="usuario"
                      placeholder="Usuario"
                     onChange={inputLogin}                    
                     value={login.usuario}
                      required
               
                    />

                </FormGroup>
                
                
               <br />
               <FormGroup className="mb-2">
                 <FormControl 
                   className="input"
                  type="text"
                  name="senha"
                  placeholder="Senha"
                  onChange={inputLogin}    
                  value={login.senha}
                   required
                  
                />
               
                
               </FormGroup>
               
               <br/>
               <button onClick={onSubmit} className="loginBtn">
                <Link to="/card">Fazer Login </Link> 
               </button>
               <p>Esqueceu sua Senha?</p>

                
              
                 
             </form>
            
             </div>

            
             
           
            
      </Container>
      <Footer />
            </div>
    )
}

        export default LoginAdministrador;
        

        
   
