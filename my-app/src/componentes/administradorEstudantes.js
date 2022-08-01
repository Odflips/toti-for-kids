import React,{Fragment,useState,useEffect}from "react"
import ListEstudantes from "./administrador-estudantes/listEstudantes";
import FormEstudantes from "./administrador-estudantes/formEstudantes";
import Footer from "./footer";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";



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
          
          <div className='container'>
                <div className='row'>
                    <div className='col-7'>
                        <h2 style={{ textAlign: "center" }}>Cursos Disponíveis</h2>
                        <ListEstudantes setEstudante={setEstudante} estudante={estudante} estudantes={estudantes}  setEstudanteUpdated={setEstudanteUpdated} />

                    </div>
                    <div className='col-5'>
                        <h2 style={{ textAlign: "center" }}>Adicionar Cursos</h2>
                        <FormEstudantes estudante={estudante} setEstudante={setEstudante} />
                    </div>
                    
                </div>
            </div>
        <Button className='btn btn-secodary'><Link to='/card'> Voltar</Link></Button>
        <Footer />
        </Fragment>

    )
}
export default AdministradorEstudantes;