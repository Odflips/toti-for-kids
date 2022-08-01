import React from 'react'

const ListEstudantes = ({ estudantes,setEstudanteUpdated,estudante,setEstudante}) => {

    const handleDelete = idEstudante => {

        const requestInit = {
            method: 'DELETE',
        }

        fetch('http://localhost:3002/api/estudantes/' + idEstudante, requestInit)
            .then(res => res.text())
            .then(res => console.log(res))

        setEstudanteUpdated(true)
    }

    let { nome, usuario, email, senha,resenha } = estudante
    const handleUpdate = idEstudantes => {
      

        //validacion de los inputs
      
        if (nome === '' || usuario === '' || email === '' || senha === '' || resenha === '') {
            alert('Toda la informacion es obligatoria')
            return
        }
        const requestInit = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(estudante)
        }

        fetch('http://localhost:3002/api/estudantes/' + idEstudantes, requestInit)
            .then(res => res.text())
            .then(res => console.log(res))
        
        //reiniciar el state
        setEstudante({
            nome: '',
            usuario: '',
             email: '',
            senha: '',
            resenha:''

        })

        setEstudanteUpdated(true)
    }

    

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>ID do aluno</th>
                    <th>Nome do aluno</th>
                    <th>Email do aluno</th>
                    
                </tr>
            </thead>
            <tbody>
                {estudantes.map(estudantes => (
                    <tr key={estudantes.idEstudantes}>
                        <td>{estudantes.idEstudantes}</td>
                        <td>{estudantes.nome}</td>
                        <td>{estudantes.email}</td>
                       

                        <td>
                            <div className='mb-3'>
                                <button onClick={() => handleDelete(estudantes.idEstudantes)} className='btn btn-danger'>Delete</button>
                            </div>
                        </td>
                        <td>
                            <div className='mb-3'>
                                <button onClick={() => handleUpdate(estudantes.idEstudantes)} className='btn btn-dark'>Update</button>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default ListEstudantes;
