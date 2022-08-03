import React from "react"
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const MeusCursos =()=>{
    const navigate = useNavigate()
   return(
    <div>
        <h1>Seja Bem Vindo!</h1>
      <Button onClick={()=>{
         localStorage.clear()
        navigate('/estudante')
      }}>Log out</Button>
    </div>
   )
}
export default MeusCursos ;