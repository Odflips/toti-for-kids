import React, { Fragment, useState, useEffect } from 'react'
import ListProfessor from './administrador-professores/listProfessor';
import FormProfessor from './administrador-professores/formProfessor';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from './footer';




function AdministradorProfessor() {
    //Conexion bd courses
    //---GET CURSOS
    const [professores, setProfessores] = useState([])
    const [professorUpdated, setprofessorUpdated] = useState(false);


    const [professor, setProfessor] = useState({
        nome: '',
        usuario: '',
        senha: '',
        id_courses: 0

    });

    useEffect(() => {
        const getProfessores = () => {
            fetch('http://localhost:3002/api/professores')
                .then(res => res.json())
                .then(res => setProfessores(res))
        }
        getProfessores()
        setprofessorUpdated(false)
    }, [professorUpdated]);




    return (
        <Fragment>

            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-7'>
                        <h2 style={{ textAlign: "center" }}>Lista do Professores</h2>
                        <ListProfessor setProfessor={setProfessor} professor={professor} professores={professores} setprofessorUpdated={setprofessorUpdated} />

                    </div>
                    <div className='col-5'>
                        <h2 style={{ textAlign: "center" }}>Adicionar Professores</h2>
                        <FormProfessor professor={professor} setProfessor={setProfessor} />
                    </div>

                </div>
            </div>
            <Button className='btn btn-secodary'><Link to='/card'> Voltar</Link></Button>
            <Footer />
        </Fragment>

    );
}

export default AdministradorProfessor;
