import React, { useState } from "react";
import { Container, FormGroup, FormControl } from "react-bootstrap";
import Footer from "./footer";
import { useForm } from "./hooks/useForm";
import { useNavigate} from "react-router-dom";
import Swal from "sweetalert2"
import "./style.css"

const initialForm = {
  nome:'',
  usuario:'',
  email:'',
  senha:'',
  resenha:'',
}



const validationsForm =(form) =>{
  let errors={}
  let regexName=/^[A-Za-zÁáàãÉéêÍíÓóôÜü\s]+$/
  /*let regexUserName=/^(w+[/./-]?){1,}[A-Za-zÁáàãÉéêÍíÓóôÜü\s]+$/*/
  let regexEmail=/^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/
  let regexpassword = /^.{1,8}$/
  let  regexConfirmPassword = /^.{1,8}$/

if(!form.nome.trim()){
  errors.nome = "O Campo Nome é requerido"
}else if(!regexName.test(form.nome.trim())){
  errors.nome = "o campo Nome aceita somente letras e espaços em branco"
}

if(!form.usuario.trim()){
  errors.usuario = "O Campo usuario é requerido"
}

if(!form.email.trim()){
  errors.email = "O Campo email é requerido"
} else if(!regexEmail.test(form.email.trim())){
  errors.email = "O email é incorreto"
}

if(!form.senha.trim()){
  errors.senha = "O Campo  senha  é requerido"
}else if(!regexpassword.test(form.senha.trim())){
  errors.senha = "A sua senha pode conter somente 8 caracteres"
}

if(!form.resenha.trim()){
  errors.resenha = "O Campo  confirmação de senha é requerido"
}else if(!regexConfirmPassword.test(form.resenha.trim())) {
  errors.confirmpassword = "A sua senha pode conter somente 8 caracteres"
}else if(form.resenha !== form.senha){
  errors.resenha = "A senha não coincide"
}

  return errors
}


const CadastroEstudante = () => {
  const{form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit}= useForm(initialForm,validationsForm)

    let style={
      fontWeight:"bold",
      color:"#dc3545",
    }
    let navigate = useNavigate();

  return (
    <div className="conteiner">

      <Container  className="bodyLoginE2">



        <div className="loginE3">
            <form onSubmit={handleSubmit}>
            <div className="completarformulario">
           
              <h3>Complete o Formulário e junte-se a nós</h3>
             
              <p style={{ fontSize: 12, marginTop: 0 }}>vagas limitadas!</p>
            </div>

           
            <FormGroup className="mb-2 ">
              <label className="label">Nome</label>
              <FormControl
                className="inputCadastro"
                type="text"
                name="nome"
                placeholder="Insira seu nome"
                onBlur={handleBlur}
                onChange={handleChange}
                value={form.nome}
                required
              />

            </FormGroup>
            {errors.nome && <p style={style}>{errors.nome}</p>}
            <br />

            <FormGroup className="mb-2">
              <label className="label">Usuario</label>
              <FormControl
                className="inputCadastro"
                type="text"
                name="usuario"
                placeholder="insira seu nome de usuario"
                onBlur={handleBlur}
                onChange={handleChange}
                value={form.usuario}
                required
              />

            </FormGroup>
            {errors.usuario && <p style={style}>{errors.usuario}</p>}
            <br />

            <FormGroup className="mb-2">
              <label className="label">Email</label>
              <FormControl
                className="inputCadastro"
                type="email"
                name="email"
                placeholder="insira seu e-mail"
                onBlur={handleBlur}
                onChange={handleChange}
                value={form.email}
                required
                
              />

            </FormGroup>
            {errors.email && <p style={style}>{errors.email}</p>}
            <br />

            <FormGroup className="mb-2">
              <label className="label">Senha</label>
              <FormControl
                className="inputCadastro"
                id="keyphrase"
                type="password"
                name="senha"
                pattern="[a-z]*"
                placeholder="Senha 8 [ a-z]"
                max="8"
                onBlur={handleBlur}
                onChange={handleChange}
                value={form.senha}
                required
               
              />


            </FormGroup>
            {errors.senha && <p style={style}>{errors.senha}</p>}
            <br />

            <FormGroup className="mb-2">
              <label className="label">Confirme a senha</label>
              <FormControl
                className="inputCadastro"
                id="keyphrase2"
                type="password"
                name="resenha"
                placeholder="confirme sua senha 8 [ a-z]"
                onBlur={handleBlur}
                onChange={handleChange}
                value={form.resenha}
                required
                
              />


            </FormGroup>

            {errors.resenha && <p style={style}>{errors.resenha}</p>}
            <br />

            <button className="loginCadastro">
              Cadastrarse
            </button>

            <div id="message"> </div>

            <div className="texto-fundo">

              <p className="criar-conta-termos">Seus dados estão seguros conosco. Usaremos seu número de telefone apenas para compartilhar informações do programa e links de classe. Ao me registrar aqui, eu concordo com os Termos e Condições e Política de Privacidade da TOTI for Kids </p>
            </div>


          </form>
 
        {loading && Swal.showLoading()}
        {response &&  Swal.fire(
                    'Adicionado!',
                    'O registro  foi adicionado con sucesso !',
                    'success'
                  )
                  && navigate('/estudante')}
        
        </div>
        
         
         </Container>
      
      
      <Footer />
   
   </div>
  )
}
export default CadastroEstudante;