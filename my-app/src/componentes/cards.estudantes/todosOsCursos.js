import React, {useEffect, useState} from "react";
import ListCourses from "../administrador-cursos/listCourses";




const TodosOsCursos = () => {


  

  const [detalhes_courses, setCourses] = useState([])
  const [courseUpdated, setcourseUpdated] = useState(false);


  const [course, setCourse] = useState({
    nome: '',
    duracao: '',
    detalhes: '',
    price: 0,
    image: ''

  });

  useEffect(() => {
    const getCourses = () => {
      fetch('http://localhost:3002/api/detalhes_course/')
        .then(res => res.json())
        .then(res => setCourses(res))
    }
    getCourses()
    setcourseUpdated(false)
  }, [courseUpdated]);


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
          </tr>
        </thead>
        <tbody>
          {detalhes_courses.map(course => (
            <tr key={course.idCourse}>
              <td>{course.nome}</td>
              <td>{course.duracao}</td>
              <td>{course.detalhes}</td>
              <td>{course.price}</td>
             
              
              <td>
                <div className='mb-3'>
                  <button className='btn btn-dark'>ADD</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
export default TodosOsCursos;