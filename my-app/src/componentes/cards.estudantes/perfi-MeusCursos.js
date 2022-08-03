import React from "react"
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const MeusCursos =()=>{
    const navigate = useNavigate()
   return(
    <div>
    <div>
        <h1>Seja Bem Vindo!</h1>
      
    </div>
    <Button onClick={()=>{
         localStorage.clear()
        navigate('/cardEstudante')
      }}>Voltar</Button>
    </div>
   )
}
export default MeusCursos ;