import React from 'react';
import Swal from "sweetalert2";

const FormEstudantes = ({ estudante, setEstudante }) => {

    const changeHandler = e => {
        setEstudante({
            ...estudante,
            [e.target.name]: e.target.value
        })

    }

    let { nome,usuario, email, curso} = estudante

    const onSubmit = () => {
        //validacion de los inputs
     
        if (nome === '' || usuario === '' || email === '' || curso ==='') {
            alert('Toda la informacion es obligatoria')
            return
        }
        //consulta
        const requestInit = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(estudante)
        }

        fetch('http://localhost:3002/api/estudantes', requestInit)
            .then(res => res.text())
            .then((res) => {
                     
                    Swal.fire(
                      'adicionado!',
                      'A informação  foi adicionada com sucesso!',
                      'success'
                    )
                    })  
           
               


        //reiniciar el state
        setEstudante({
            nome: '',
            usuario: '',
            email: '',
            curso:''

        })

    }


    return (
        <form onSubmit={onSubmit}>
            <div className='mb-4'>
                <label htmlFor='nomeCourse' className='form-label'>Nome do Aluno</label>
                <input 
                value={ nome} 
                name='nome' 
                onChange={changeHandler} 
                type='text' 
                id='nomeCourse' 
                className='form-control' />
            </div>
            <div className='mb-4'>
                <label htmlFor='duracaoCourse' className='form-label'>Usuario</label>
                <input
                 value={usuario } 
                 name='usuario' 
                 onChange={changeHandler} 
                 type='text'
                  id='duracaoCourse'
                 className='form-control' />
            </div>
            <div className='mb-4'>
                <label htmlFor='detalhesCourse' className='form-label'>email do Aluno</label>
                <input 
                value={email} 
                name='email' 
                onChange={changeHandler} 
                type='text' 
                id='detalhesCourse' 
                className='form-control' />
            </div>
            <div className='mb-4'>
                <label htmlFor='priceCourse' className='form-label'>Cursos do Aluno</label>
                <input 
                value={curso} 
                name='course' 
                onChange={changeHandler}
                 type='text' 
                 id='priceCourse' 
                 className='form-control' />
            </div>
            <button type='submit' className='btn btn-primary'>Submit</button>
        </form>
    );
}

export default FormEstudantes;