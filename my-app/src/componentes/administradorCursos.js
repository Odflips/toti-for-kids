import React, { Fragment, useState, useEffect } from 'react'
import ListCourse from './administrador-cursos/listCourses';
import FormCourse from './administrador-cursos/formCourse';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from './footer';
import mascota from '../assets/img/mascota.png';




function AdministradorCursos() {
    //Conexion bd courses
    //---GET CURSOS
    const [detalhes_courses, setCourses] = useState([])
    const [courseUpdated, setcourseUpdated] = useState(false);


    const [course, setCourse] = useState({
        nome: '',
        duracao: '',
        detalhes: '',
        price: 0

    });

    useEffect(() => {
        const getCourses = () => {
            fetch('http://localhost:3002/api/detalhes_course')
                .then(res => res.json())
                .then(res => setCourses(res))
        }
        getCourses()
        setcourseUpdated(false)
    }, [courseUpdated]);



    
    return (
        <Fragment>
          
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-5'>
                        <h2 style={{ textAlign: "center" }}>Adicionar Cursos</h2>
                        <FormCourse course={course} setCourse={setCourse} />
                    </div>
                    <div className='col-7'>
                    <img className="robotForm" src={mascota} alt="cursoimg" />
                    </div>             
                    </div>
                        <div className='mb-5'>
                        <h2 style={{ textAlign: "center" }}>Cursos Disponíveis</h2>
                        <ListCourse setCourse={setCourse} course={course} detalhes_courses={detalhes_courses}  setcourseUpdated={setcourseUpdated} />

                    </div>
                   
            </div>
        <Button className='btn btn-secodary'><Link to='/card'> Voltar</Link></Button>
        <Footer />
        </Fragment>

    );
}

export default AdministradorCursos;
