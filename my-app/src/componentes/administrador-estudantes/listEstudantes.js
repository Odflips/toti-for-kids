import React from 'react'
import Swal from 'sweetalert2'

const ListEstudantes = ({ estudantes, setEstudanteUpdated, estudante, setEstudante }) => {

    const handleDelete = idEstudantes => {
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
    
            fetch('http://localhost:3002/api/estudantes/' + idEstudantes, requestInit)
                .then(res => res.text())
                .then((res) =>{
                   
                        Swal.fire(
                          'Eliminado!',
                          'O registro foi eliminado !',
                           'success'  
                        )
                       
                      
                })
    
            setEstudanteUpdated(true)
        }
    
        })
    }
        
    let { nome, usuario, email, senha, resenha } = estudante
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
            resenha: ''


        })

        setEstudanteUpdated(true)
    }



    return (
        <table className='table'>
            <thead>
                <tr>

                    <th>Nome </th>
                    <th>Email </th>
                    <th>Senha </th>
                    <th>Resenha</th>



                </tr>
            </thead>
            <tbody>
                {estudantes.map(estudantes => (
                    <tr key={estudantes.idEstudantes}>
                        <td>{estudantes.nome}</td>
                        <td>{estudantes.email}</td>
                        <td>{estudantes.senha}</td>
                        <td>{estudantes.resenha}</td>




                        <td className='btn-table3'>
                            <div className='mb-3'>
                                <button onClick={() => handleDelete(estudantes.idEstudantes)} className='btn btn-danger'>Delete</button>
                            </div>
                        </td>
                        <td className='btn-table4'>
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
