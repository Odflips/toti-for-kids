import React from 'react'
import Swal from 'sweetalert2'

const ListCourses = ({ detalhes_courses, setcourseUpdated, course,setCourse}) => {

    const handleDelete = idCourse => {
        Swal.fire({
            title: 'Tem certeza, que deseja eliminar o registro ',
            text: 'Você não será capaz de reverter isso!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#218838',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Sim,Apagar!'
            
          }).then((result) => {
             
            if(result.isConfirmed){ 
                
                const requestInit = {
                method: 'DELETE',
            }
    
            fetch('http://localhost:3002/api/detalhes_course/' + idCourse, requestInit)
                .then(res => res.text())
                .then((res) => {
                    Swal.fire(
                        'Eliminado!',
                        'O registro foi eliminado !',
                         'success'  
                      )
                     
                })
    
            setcourseUpdated(true)
        }
    
    })
}

       

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
                        <td className='btn-table2'>
                            <div className='mb-3'>
                                <button onClick={() => handleDelete(course.idCourse)} className='btn btn-danger'>Delete</button>
                            </div>
                        </td>
                        <td className='btn-table'>
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
