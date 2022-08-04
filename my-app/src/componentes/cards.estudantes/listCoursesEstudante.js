import React from 'react'
import Swal from 'sweetalert2'

const ListCoursesEstudantes = ({ detalhes_courses, setcourseUpdated, course,setCourse}) => {

   

       

    let { nome, duracao, detalhes, price } = course
    const handleUpdate = idCourse => {
      

        //validacion de los inputs
        price = parseInt(price)
        if (nome === '' || duracao === '' || detalhes === '' || price <= 0) {
            alert('Toda la informacion es obligatoria')
            return
        }
        const requestInit = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(course)
        }

        fetch('http://localhost:3002/api/detalhes_course/' + idCourse, requestInit)
            .then(res => res.text())
            .then(res => console.log(res))
        
        //reiniciar el state
        setCourse({
            nome: '',
            duracao: '',
            detalhes: '',
            price: 0

        })

        setcourseUpdated(true)
    }

    

    return (
        
        <table className='table'>
            <thead>
                <tr>
                    <th>ID Curso</th>
                    <th>Nome do Curso</th>
                    <th>Duracao do Curso</th>
                    <th>Detalhes do Curso </th>
                    <th>Price R$</th>
                </tr>
            </thead>
            <tbody>
                {detalhes_courses.map(course => (
                    <tr key={course.idCourse}>
                        <td>{course.idCourse}</td>
                        <td>{course.nome}</td>
                        <td>{course.duracao}</td>
                        <td>{course.detalhes}</td>
                        <td>{course.price}</td>
                        <td>
                            <div className='mb-3'>
                                <button onClick={() => handleDelete(course.idCourse)} className='btn btn-danger'>Delete</button>
                            </div>
                        </td>
                        <td>
                            <div className='mb-3'>
                                <button onClick={() => handleUpdate(course.idCourse)} className='btn btn-dark'>Update</button>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );

}

export default ListCourses;
