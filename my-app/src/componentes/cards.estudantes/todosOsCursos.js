import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";




const TodosOsCursos = () => {


  
  
  const [detalhes_courses, setCourses] = useState([])
  const [courseUpdated, setcourseUpdated] = useState(false);

console.log(detalhes_courses.idCourse)


  useEffect(() => {
    const getCourses = () => {
      fetch('http://localhost:3002/api/detalhes_course/')
        .then(res => res.json())
        .then(res => setCourses(res))
    }
    getCourses()
    setcourseUpdated(false)
  }, [courseUpdated]);
   

 
  var idEstudantes=localStorage.getItem("auth")
  
  console.log(idEstudantes)
  const [inscricao, setInscricao] = useState(0)

  
  const OnAdd = (idCourse) => {
    const data = {idEstudantes:idEstudantes,idCourse:idCourse}
   console.log(data)
    //consulta
    const requestInit = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }

    fetch('http://localhost:3002/api/inscricao', requestInit)
      .then(res => res.text())
      .then((res) => {

        Swal.fire(
          'adicionado!',
          'O curso  foi adicionado com sucesso!',
          'success'
        )
      })




    //reiniciar el state
    setInscricao({
      id_estudantes: '',
      id_courses: '',
      
    })

  }

  console.log(OnAdd)
  return (
    <div>
      <div>
        <h1>Seja Bem Vindo!</h1>

      </div>
      <table className='table'>
        <thead>
          <tr>
            <th>Nome do Curso</th>
            <th>Duracao do Curso</th>
            <th>Detalhes do Curso </th>
            <th>Price R$</th>
            <th>ID Course</th>
            
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
                  <button onClick={() =>OnAdd(course.idCourse)} className='btn btn-dark'>ADD</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Button className='btn btn-secodary'><Link to='/cardEstudante'> Voltar</Link></Button>
      
    </div>
  )
}
export default TodosOsCursos;