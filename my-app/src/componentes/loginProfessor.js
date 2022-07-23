import React from "react"
import "./style.css"
import "./App.css"
import Footer from "./footer"
import { Container,FormGroup,FormControl } from "react-bootstrap"


const LoginProfessor = () =>{
   return(
       <div>
       
        <Container  className="bodyLoginP">
            <div className="loginE2">
            <div>
                <h1 className="titulo">Sign in</h1>
               
                <p className="subtitulo">Transforme o Mundo</p>
             
              </div>
              

           
           <form>
           <FormGroup className="mb-2 ">

                    <FormControl
                      className="input"
                      type="text"
                      name="username"
                      placeholder="Usuario"
                    />

                </FormGroup>
                
               <br />
               <FormGroup className="mb-2">
                 <FormControl 
                   className="input"
                  type="text"
                  name="password"
                  placeholder="Senha"
                />
               
                
               </FormGroup>
               <br/>

               <FormGroup className="mb-2">
                 <FormControl 
                   className="input"
                  type="text"
                  name="curso"
                  placeholder="curso"
                />
                </FormGroup>
                <br />
               <button  className="loginBtn2">
                  Fazer Login
               </button>

           </form>
           </div>
         
        </Container>

        
        <Footer />
      
       </div>
   )
}
export default LoginProfessor;