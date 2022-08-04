import React,{useState,useEffect} from "react"
import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import ListEstudantes from "../administrador-estudantes/listEstudantes"

const MeusCursos = () => {

  const [detalhes_courses, setCourses] = useState([])
  const [courseUpdated, setcourseUpdated] = useState(false);

console.log(detalhes_courses.idCourse)



  useEffect(() => {

    const getCourses = () => {
      var idEstudantes=localStorage.getItem("auth")
      console.log(idEstudantes)
      fetch('http://localhost:3002/api/meusCursos')
        .then(res => res.json())
        .then(res => setCourses(res))
    }
    getCourses()
    setcourseUpdated(false)
  }, [courseUpdated]);
   

  const navigate = useNavigate()
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
           

         

          </tr>
        </thead>
        <tbody>

          {detalhes_courses.map(course => (
            <tr key={course.idEstudantes}>
              <td>{course.nomeCurso}</td>
              <td>{course.duracao}</td>
              <td>{course.detalhes}</td>
             
              
            </tr>
          ))}
        </tbody>
      </table>
   
      <Button onClick={() => {
    localStorage.clear()
    navigate('/cardEstudante')
    }}>Voltar</Button>
    </div>
   
   

    
   )
}
export default MeusCursos;