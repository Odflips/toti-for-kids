import React from "react";
import { Container, FormGroup, FormControl } from "react-bootstrap";
import Footer from "./footer";
import "./style.css"



const CadastroEstudante = () => {
  return (
    <div className="conteiner">

      <Container className="bodyLoginE2 ">



        <div className="loginE3">
          <form>
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
                required placeholder="Insira seu nome"
              />

            </FormGroup>
            <br />

            <FormGroup className="mb-2">
              <label className="label">Usuario</label>
              <FormControl
                className="inputCadastro"
                type="text"
                name="username"
                required placeholder="insira seu nome de usuario"
              />

            </FormGroup>
            <br />

            <FormGroup className="mb-2">
              <label className="label">Email</label>
              <FormControl
                className="inputCadastro"
                type="email"
                name="email"
                placeholder="insira seu e-mail"
                required
              />

            </FormGroup>
            <br />

            <FormGroup className="mb-2">
              <label className="label">Senha</label>
              <FormControl
                className="inputCadastro"
                id="keyphrase"
                type="text"
                name="password"
                pattern="[a-z]*"
                placeholder="Senha 8 [ a-z]"
                max="8"
                required
              />


            </FormGroup>
            <br />

            <FormGroup className="mb-2">
              <label className="label">Confirme a senha</label>
              <FormControl
                className="inputCadastro"
                id="keyphrase2"
                type="text"
                name="confirmpassword"
                placeholder="confirme sua senha 8 [ a-z]"
                
              />


            </FormGroup>
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