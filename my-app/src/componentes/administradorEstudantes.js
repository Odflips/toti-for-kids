import React,{Fragment,useState,useEffect}from "react"
import ListEstudantes from "./administrador-estudantes/listEstudantes";
import FormEstudantes from "./administrador-estudantes/formEstudantes";
import Footer from "./footer";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import mascota from '../assets/img/mascota.png';



function AdministradorEstudantes() {

    //----GET ESTUDANTES---

const [estudantes, setEstudantes] = useState([])
const [estudanteUpdated, setEstudanteUpdated] = useState(false);


const [estudante, setEstudante] = useState({
    nome: '',
   email: '',
   usuario: '',
    senha:'',
    resenha:''

});useEffect(() => {
    const getEstudantes = () => {
        fetch('http://localhost:3002/api/estudantes')
            .then(res => res.json())
            .then(res => setEstudantes(res))
    }
    getEstudantes()
    setEstudanteUpdated(false)
}, [estudanteUpdated]);

    return(

        <Fragment>
          
          <div className='container mt-5'>
                <div className='row'>
                    <div className='col-5'>
                        <h2 style={{ textAlign: "center" }}>Atualizar informações dos Alunos</h2>
                        <FormEstudantes estudante={estudante} setEstudante={setEstudante} />
                    </div>
                    <div className='col-7'>
                        <img className="robotForm" src={mascota} alt="cursoimg" />
                    </div>    
                </div>
                    <div className='mb-5'>
                        <h2 style={{ textAlign: "center" }}>Alunos Cadastrados</h2>
                        <ListEstudantes setEstudante={setEstudante} estudante={estudante} estudantes={estudantes}  setEstudanteUpdated={setEstudanteUpdated} />

                    </div>
                   
                    
                
            </div>
        <Button className='btn btn-secodary'><Link to='/card'> Voltar</Link></Button>
        <Footer />
        </Fragment>

    )
}
export default AdministradorEstudantes;