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
                        <th>{course.idCourse}</th>
                        <th>{course.nome}</th>
                        <th>{course.duracao}</th>
                        <th>{course.detalhes}</th>
                        <th>{course.price}</th>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default ListCourses;
