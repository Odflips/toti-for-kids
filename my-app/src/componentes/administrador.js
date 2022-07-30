import React, { Fragment, useState, useEffect } from 'react'
import ListCourse from './administrador/listCourses';
import FormCourse from './administrador/formCourse';
import ListEstudantes from './administrador/listEstudantes';




function Administrador() {
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
            fetch('http://localhost:3002/api')
                .then(res => res.json())
                .then(res => setCourses(res))
        }
        getCourses()
        setcourseUpdated(false)
    }, [courseUpdated]);

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


    
    return (
        <Fragment>
          
            <div className='container'>
                <div className='row'>
                    <div className='col-7'>
                        <h2 style={{ textAlign: "center" }}>Cursos Disponíveis</h2>
                        <ListCourse setCourse={setCourse} course={course} detalhes_courses={detalhes_courses}  setcourseUpdated={setcourseUpdated} />

                    </div>
                    <div className='col-5'>
                        <h2 style={{ textAlign: "center" }}>Adicionar Cursos</h2>
                        <FormCourse course={course} setCourse={setCourse} />
                    </div>
                    <div className='container'>
                        <h2 style={{ textAlign: "center" }}>Estudantes cadastrados</h2>
                        <ListEstudantes setEstudante={setEstudante} estudante={estudante} estudantes={estudantes}  setEstudanteUpdated={setEstudanteUpdated} />
                    </div>
                </div>
            </div>

        </Fragment>

    );
}

export default Administrador;
