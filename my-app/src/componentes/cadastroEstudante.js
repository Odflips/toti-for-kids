import React from "react";
import { Container,FormGroup,FormControl } from "react-bootstrap";
import Footer from "./footer";
import "./style.css"

const CadastroEstudante = () => {
    return(
        <div>
          
        <Container className="bodyLoginE "> 
      
     

          <div className="loginE3">
          <form>
            <div className="completarformulario">
              <h3>Complete o Formulário e junte-se a nós</h3>
               <p style={{fontSize:12, marginTop:0}}>vagas limitadas!</p>
            </div>
            

             <FormGroup className="mb-2 ">
             <label className="label">Nome</label>
                 <FormControl
                   className="inputCadastro"
                   type="text"
                   name="name"
                   placeholder="insira seu nome"
                 />

             </FormGroup>
              <br />

            <FormGroup className="mb-2">
            <label  className="label">Usuario</label>
              <FormControl 
                className="inputCadastro"
               type="text"
               name="username"
               placeholder="insira seu nome de usuario"
             />
             
              </FormGroup>
             <br />

               <FormGroup className="mb-2">
            <label  className="label">Email</label>
              <FormControl 
              
                className="inputCadastro"
               type="email"
               name="email"
               placeholder="insira seu e-mail"
             />
            
             </FormGroup>
           <br />

            <FormGroup className="mb-2">
            <label  className="label">Senha</label>
              <FormControl 
                className="inputCadastro"
               type="text"
               name="password"
               placeholder="Senha"
             />
            
             
            </FormGroup>
           <br />

            <FormGroup className="mb-2">
            <label  className="label">Confirme a senha</label>
              <FormControl 
                className="inputCadastro"
               type="text"
               name="confirmpassword"
               placeholder="confirme sua senha"
             />
            
             
            </FormGroup>
            <br/>
            <button  className="loginCadastro">
              Cadastrarse
            </button>

            <div className="texto-fundo">

             <p className="criar-conta-termos">Seus dados estão seguros conosco. Usaremos seu número de telefone apenas para compartilhar informações do programa e links de classe. Ao me registrar aqui, eu concordo com os Termos e Condições e Política de Privacidade da TOTI for Kids </p>
             </div>
           
              
          </form>
         
          
          </div>
        
         
   </Container>
   <Footer />
         </div>
    )
} 
export default CadastroEstudante;