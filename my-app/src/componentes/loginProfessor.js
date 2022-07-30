import React from "react"
import "./style.css"
import "./App.css"
import Footer from "./footer"
import { Container,FormGroup,FormControl } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useForm } from "./hooks/useForm"


const initialForm ={

  usuario:"",
  senha:"",
  curso:""
  
}

const validationsForm =(form) =>{
  let errors={}
 

  let regexpassword = /^.{1,8}$/




if(!form.usuario.trim()){
  errors.usuario = "O Campo usuario é requerido"
}
if(!form.senha.trim()){
  errors.senha = "O Campo  senha  é requerido"
}else if(!regexpassword.test(form.senha.trim())){
  errors.senha = "A sua senha pode conter somente 8 caracteres"

 }
 if(!form.curso.trim()){
  errors.curso = "O Campo curso é requerido"
}
 
 return errors
}



const LoginProfessor = () =>{


  const{form,
    errors,
    handleChange,
    handleBlur,
    handleLoginProfessor}= useForm(initialForm,validationsForm)

    let style={
      fontWeight:"bold",
      color:"#dc3545",
    }

   return(
       <div className="conteiner">
       
        <Container  className="bodyLoginP">
            <div className="loginE2">
            <div>
                <h1 className="titulo">Sign in</h1>
               
                <p className="subtitulo">Transforme o Mundo</p>
             
              </div>
              

           
           <form onSubmit={ handleLoginProfessor}>
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

               <FormGroup className="mb-2">
                 <FormControl 
                   className="input"
                  type="text"
                  name="curso"
                 placeholder="curso"
                 onBlur={handleBlur}
                onChange={handleChange}
                value={form.curso}
                 required
                />
                </FormGroup>
                {errors.curso && <p style={style}>{errors.curso}</p>}

                <br />
               <button  className="loginBtn2">
               <Link to="/dashboardProf">Fazer Login </Link> 
               </button>
               <p>Esqueceu sua Senha?</p>
           </form>
           </div>
         
        </Container>

        
        <Footer />
      
       </div>
   )
}
export default LoginProfessor;