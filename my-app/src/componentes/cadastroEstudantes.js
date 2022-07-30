import React, { useState } from "react";
import Swal from "sweetalert2"
import { useNavigate} from "react-router-dom";


const CadastroEstudantes = () => {

    const [estudantes, setEstudantes] = useState({
        nome: '',
        usuario: '',
       email: '',
        senha:'',
        resenha:''

    })

    const changeHandler = e => {
        setEstudantes({
            ...estudantes,
            [e.target.name]: e.target.value
        })

    }
    let navigate = useNavigate();
    
    let { nome, usuario, email, senha,resenha } = estudantes
    let regexName=/^[A-Za-zÁáàãÉéêÍíÓóôÜü\s]+$/
     /*let regexUserName=/^(w+[/./-]?){1,}[A-Za-zÁáàãÉéêÍíÓóôÜü\s]+$/*/
    let regexEmail=/^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/
     let regexpassword = /^.{1,8}$/
     let  regexConfirmPassword = /^.{1,8}$/
    const onSubmit =  () => {
        //validacion de los inputs
      
        if (nome === '' && (!regexName.test(nome.trim())) || usuario === '' || email === '' ||senha === '' || resenha === '') {
            alert('Toda la informacion es obligatoria')
            return
        }
        //consulta
        const requestInit = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(estudantes)
        }

        fetch('http://localhost:3002/api/estudantes', requestInit)
            .then(res => res.text())
            .then((res) => {
                     
                    Swal.fire(
                      'adicionado!',
                      'O curso  foi adicionado com sucesso!',
                      'success'
                    )  })
                    navigate('/estudante')  
           
            

    }


    return (
        <form onSubmit={onSubmit}>
            <div className='mb-4'>
                <label htmlFor='nomeEstudante' className='form-label'>Nome </label>
                <input value= {nome} name='nome' onChange={changeHandler} type='text'  className='form-control' />
            </div>
            <div className='mb-4'>
                <label htmlFor='usuarioestudante' className='form-label'>usuario</label>
                <input value={usuario} 
                  name='usuario'
                  onChange={changeHandler}
                  type='text'
                   id='duracaoCourse'
                   className='form-control' />
            </div>
            <div className='mb-4'>
                <label htmlFor='email' className='form-label'>email</label>
                <input 
                value={email}
                 name='email'
                  onChange={changeHandler} 
                  type='text'
                 className='form-control' />
            </div>
            <div className='mb-4'>
                <label htmlFor='senha' className='form-label'>senha</label>
                <input 
                value={senha} 
                name='senha'
                 onChange={changeHandler} 
                 type='password'
                  className='form-control' />
            </div>
            <div className='mb-4'>
                <label htmlFor='resenha' className='form-label'>Confirmação da senha</label>
                <input 
                value={resenha} 
                name='resenha'
                 onChange={changeHandler} 
                 type='password'
                  className='form-control' />
            </div>
            <button type='submit' className='btn btn-primary'>Submit</button>
        </form>
    );
}

export default CadastroEstudantes;

