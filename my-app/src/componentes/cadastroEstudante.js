import React from "react";
import { Container, FormGroup, FormControl } from "react-bootstrap";
import Footer from "./footer";
import { useForm } from "./hooks/useForm";
import "./style.css"

const initialForm ={
  name:"",
  username:"",
  email:"",
  password:"",
  confirmpassword:"",
}


const validationsForm =(form) =>{
  let errors={}
  let regexName=/^[A-Za-zÁáàãÉéêÍíÓóôÜü\s]+$/
  /*let regexUserName=/^(w+[/./-]?){1,}[A-Za-zÁáàãÉéêÍíÓóôÜü\s]+$/*/
  let regexEmail=/^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/
  let regexpassword = /^.{1,8}$/
  let  regexConfirmPassword = /^.{1,8}$/

if(!form.name.trim()){
  errors.name = "O Campo Nome é requerido"
}else if(!regexName.test(form.name.trim())){
  errors.name = "o campo Nome aceita somente letras e espaços em branco"
}

if(!form.username.trim()){
  errors.username = "O Campo usuario é requerido"
}

if(!form.email.trim()){
  errors.email = "O Campo email é requerido"
} else if(!regexEmail.test(form.email.trim())){
  errors.email = "O email é incorreto"
}

if(!form.password.trim()){
  errors.password = "O Campo  senha  é requerido"
}else if(!regexpassword.test(form.password.trim())){
  errors.password = "A sua senha pode conter somente 8 caracteres"
}

if(!form.confirmpassword.trim()){
  errors.confirmpassword = "O Campo  confirmação de senha é requerido"
}else if(!regexConfirmPassword.test(form.confirmpassword.trim()) && form.password)  {
  errors.confirmpassword = "A senha digitada não coincide"
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

  return (
    <div className="conteiner">

      <Container className="bodyLoginE2 ">

;

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
                name="name"
                placeholder="Insira seu nome"
                onBlur={handleBlur}
                onChange={handleChange}
                value={form.name}
                required
              />

            </FormGroup>
            {errors.name && <p style={style}>{errors.name}</p>}
            <br />

            <FormGroup className="mb-2">
              <label className="label">Usuario</label>
              <FormControl
                className="inputCadastro"
                type="text"
                name="username"
                placeholder="insira seu nome de usuario"
                onBlur={handleBlur}
                onChange={handleChange}
                value={form.username}
                required
              />

            </FormGroup>
            {errors.username && <p style={style}>{errors.username}</p>}
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
                name="password"
                pattern="[a-z]*"
                placeholder="Senha 8 [ a-z]"
                max="8"
                onBlur={handleBlur}
                onChange={handleChange}
                value={form.password}
                required
               
              />


            </FormGroup>
            {errors.password && <p style={style}>{errors.password}</p>}
            <br />

            <FormGroup className="mb-2">
              <label className="label">Confirme a senha</label>
              <FormControl
                className="inputCadastro"
                id="keyphrase2"
                type="password"
                name="confirmpassword"
                placeholder="confirme sua senha 8 [ a-z]"
                onBlur={handleBlur}
                onChange={handleChange}
                value={form.confirmpassword}
                required
                
              />


            </FormGroup>

            {errors.confirmpassword && <p style={style}>{errors.confirmpassword}</p>}
            <br />
            <button className="loginCadastro">
              Cadastrarse
            </button>

            <div id="message"></div>

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