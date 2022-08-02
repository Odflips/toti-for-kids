import React from 'react'

const ListProfessor = ({ professores, setprofessorUpdated, professor,setProfessor}) => {

    const handleDelete = idProfessor => {

        const requestInit = {
            method: 'DELETE',
        }

        fetch('http://localhost:3002/api/professores/' + idProfessor, requestInit)
            .then(res => res.text())
            .then(res => console.log(res))

        setprofessorUpdated(true)
    }

    let { nome, usuario, senha, id_courses } = professor
    const handleUpdate = idProfessor => {
      

        //validacion de los inputs
        id_course = parseInt(id_course)
        if (nome === '' || usuario === '' || senha === '' || id_course <= 0) {
            alert('Toda la informacion es obligatoria')
            return
        }
        const requestInit = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(professor)
        }

        fetch('http://localhost:3002/api/professores/' + idProfessor, requestInit)
            .then(res => res.text())
            .then(res => console.log(res))
        
        //reiniciar el state
        setProfessor({
            nome: '',
            usuario: '',
            senha: '',
            id_courses: 0

        })
        setprofessorUpdated(true)
    }

    

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>ID Professor</th>
                    <th>Nome do Professor</th>
                    <th>Usuario do Professor</th>
                    <th>Senha do Professor </th>
                    <th>ID do Curso</th>
                </tr>
            </thead>
            <tbody>
                {professores.map(professor => (
                    <tr key={professor.idProfessor}>
                        <td>{professor.idProfessor}</td>
                        <td>{professor.nome}</td>
                        <td>{professor.usuario}</td>
                        <td>{professor.senha}</td>
                        <td>{professor.id_courses}</td>
                        <td>
                            <div className='mb-3'>
                                <button onClick={() => handleDelete(professor.idProfessor)} className='btn btn-danger'>Delete</button>
                            </div>
                        </td>
                        <td>
                            <div className='mb-3'>
                                <button onClick={() => handleUpdate(professor.idProfessor)} className='btn btn-dark'>Update</button>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default ListProfessor;
