import React from "react";
import { Container,FormControl,FormGroup} from "react-bootstrap"
import { Link } from "react-router-dom";
import "./style.css"
import Footer from "./footer.js"
import { useForm } from "./hooks/useForm";
import mascota from "../assets/img/mascota.png"

const initialForm ={

  usuario:"",
  senha:""
  
}

const validationsForm =(form) =>{
  let errors={}
 
  let regexUserName=/^(w+[/./-]?){1,}[A-Za-zÁáàãÉéêÍíÓóôÜü\s]+$/
  let regexpassword = /^.{1,8}$/




if(!form.usuario.trim()){
  errors.usuario = "O Campo usuario é requerido"
}
if(!form.senha.trim()){
  errors.senha = "O Campo  senha  é requerido"
}else if(!regexpassword.test(form.senha.trim())){
  errors.senha = "A sua senha pode conter somente 8 caracteres"

 }
 
 return errors
}






const LoginAdministrador =() =>{


  const{form,
    errors,
    handleChange,
    handleBlur,
    handleLoginEstudante}= useForm(initialForm,validationsForm)

    let style={
      fontWeight:"bold",
      color:"#dc3545",
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
              
           
          
             
             
             <form className="sem-conta" onSubmit={handleLoginEstudante}>
             

                <FormGroup className="mb-2 ">
                    <FormControl
                      className="input"
                      type="text"
                      name="usuario"
                      placeholder="Usuario"
                     onBlur={handleBlur}
                     onChange={handleChange}
                     value={form.usuario}
                      required
               
                    />

                </FormGroup>
                {errors.usuario && <p style={style}>{errors.usuario}</p>}
                
               <br />
               <FormGroup className="mb-2">
                 <FormControl 
                   className="input"
                  type="text"
                  name="senha"
                  placeholder="Senha"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={form.senha}
                   required
                  
                />
               
                
               </FormGroup>
               {errors.senha && <p style={style}>{errors.senha}</p>}
               <br/>
               <button  className="loginBtn">
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
        

        
   
