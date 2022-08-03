import React from 'react';
import Swal from "sweetalert2";

const FormEstudantes = ({ estudante, setEstudante }) => {

    const changeHandler = e => {
        setEstudante({
            ...estudante,
            [e.target.name]: e.target.value
        })

    }

    let { nome,usuario, email,senha,resenha} = estudante

   


    return (
        <form >
            <div className='mb-4'>
                <label htmlFor='nomeEstu'
                className='form-label'>Nome </label>
                <input 
                value={ nome} 
                name='nome' 
                onChange={changeHandler} 
                type='text' 
                id='nomeEstu' 
                className='form-control' />
            </div>
            <div className='mb-4'>
                <label htmlFor='usuarioEstu' className='form-label'>Usuario</label>
                <input
                 value={usuario } 
                 name='usuario' 
                 onChange={changeHandler} 
                 type='text'
                  id='usuarioEstu'
                 className='form-control' />
            </div>
            <div className='mb-4'>
                <label htmlFor='emailEstu' className='form-label'>Email </label>
                <input 
                value={email} 
                name='email' 
                onChange={changeHandler} 
                type='text' 
                id='emailEstu' 
                className='form-control' />
            </div>
            
            <div className='mb-4'>
                <label htmlFor='senhaEstu' className='form-label'>Senha</label>
                <input 
                value={senha} 
                name='senha' 
                onChange={changeHandler} 
                type='text' 
                id='senhaEstu' 
                className='form-control' />
            </div>
            
            <div className='mb-4'>
                <label htmlFor='resenhaEstu' className='form-label'>Confirmação da senha</label>
                <input 
                value={resenha} 
                name='resenha' 
                onChange={changeHandler} 
                type='text' 
                id='resenhaEstu' 
                className='form-control' />
            </div>
            
          
        </form>
    );
}

export default FormEstudantes;