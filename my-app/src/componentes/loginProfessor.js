import React from "react"
import "./style.css"
import Footer from "./footer"
import { Container,FormGroup,FormControl } from "react-bootstrap"


const LoginProfessor = () =>{
   return(
       <div>
       
        <Container  className="bodyLoginP">
            <div className="loginE">

           
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
               <button  className="loginBtn">
                  Fazer Login
               </button>

           </form>
           </div>
         <Footer />
        </Container>
       
      
       </div>
   )
}
export default LoginProfessor;