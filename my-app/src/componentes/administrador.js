import React, { Fragment, useState, useEffect } from 'react'
import ListCourse from './administrador/listCourses';
import FormCourse from './administrador/formCourse';


function Administrador() {
    const [detalhes_courses, setCourses] = useState([])

    const [course, setCourse] = useState({
        nome: '',
        duracao: '',
        detalhes: '',
        price: 0

    });

    useEffect(() => {
        const getCourses = () => {
            fetch('http://localhost:3002/api')
                .then(res => res.json())
                .then(res => setCourses(res))
        }
        getCourses()
    }, [])

    return (
        <Fragment>
          
            <div className='container'>
                <div className='row'>
                    <div className='col-7'>
                        <h2 style={{ textAlign: "center" }}>Lista de Cursos</h2>
                        <ListCourse detalhes_courses={detalhes_courses} />

                    </div>
                    <div className='col-5'>
                        <h2 style={{ textAlign: "center" }}>Incluir Cursos</h2>
                        <FormCourse course={course} setCourse={setCourse} />
                    </div>
                </div>
            </div>

        </Fragment>

    );
}

export default Administrador;