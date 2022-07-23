import React from "react";
import { Container,FormControl,FormGroup} from "react-bootstrap"
import { Link } from "react-router-dom";
import "./style.css"
import Footer from "./footer.js"


const LoginEstudante =() =>{
    return (
        <div>
           
           <Container className="bodyLoginE"> 
         
        
            <div className="loginE">
              <div>
                <h1 className="titulo">Sign in</h1>
               
                <p className="subtitulo">Transforme o Mundo</p>
             
              </div>
              
           
          
             
             
             <form className="sem-conta">
             

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
               <button  className="loginBtn">
                  Fazer Login
               </button>

                <p className="criar-conta"> Não tem uma conta? <Link to="/cadastroEstudante">Inscrever-se agora </Link></p>
                  
              
                 
             </form>
            
             </div>

             <div className="faleconosco">
             
              <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbcxLteLk7VKXSbR4q_v--gqgj753JZLozNA2Bx5LrO5Sa5d1hxwKOadjqRHSklOremk8&usqp=CAU" alt="figura atendente" className="atendente"/>
             
             
                <h2>
                  Fale conosco
               </h2>
               <span>Horário: Segunda-Sexta 10h-19h. </span>
               <br />
               <span>Telefone +5511473980.</span>
             </div>
             
           
            
      </Container>
      <Footer />
            </div>
    )
}

        export default LoginEstudante;
        

        
   
