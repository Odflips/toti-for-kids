import React from 'react'

const ListCourses = ({ detalhes_courses }) => {
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>ID Curso</th>
                    <th>Nome do Curso</th>
                    <th>Duracao do Curso</th>
                    <th>Detalhes do Curso </th>
                    <th>Price</th>
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
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default ListCourses;
