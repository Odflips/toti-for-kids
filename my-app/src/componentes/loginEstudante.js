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






const LoginEstudante =() =>{


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
                <Link to="/">Fazer Login </Link> 
               </button>
               <p>Esqueceu sua Senha?</p>

                <p className="criar-conta"> Não tem uma conta? <Link to="/cadastroEstudante"><b>Inscrever-se agora</b></Link></p>
                  
              
                 
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
        

        
   
