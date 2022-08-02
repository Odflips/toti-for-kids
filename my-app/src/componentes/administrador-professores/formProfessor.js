import React from 'react';
import Swal from "sweetalert2";

const FormProfessor = ({ professor, setProfessor }) => {

    const changeHandler = e => {
        setCourse({
            ...professor,
            [e.target.name]: e.target.value
        })

    }

    let { nome, usuario, senha, id_courses} = professor

    const onSubmit = () => {
        //validacion de los inputs
        id_course = parseInt(id_course)
        if (nome === '' || usuario === '' || senha === '' || id_course <= 0) {
            alert('Toda la informacion es obligatoria')
            return
        }
        //consulta
        const requestInit = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(professor)
        }

        fetch('http://localhost:3002/api/professores', requestInit)
            .then(res => res.text())
            .then((res) => {
                     
                    Swal.fire(
                      'adicionado!',
                      'O curso  foi adicionado com sucesso!',
                      'success'
                    )
                    })  
           
               


        //reiniciar el state
        setProfessor({
            nome: '',
            usuario: '',
            senha: '',
            id_courses: 0

        })

    }


    return (
        <form onSubmit={onSubmit}>
            <div className='mb-4'>
                <label htmlFor='nomeProfessor' className='form-label'>Nome do Professor</label>
                <input value={ nome} name='nome' onChange={changeHandler} type='text' id='nomeProfessor' className='form-control' />
            </div>
            <div className='mb-4'>
                <label htmlFor='usuarioProfessor' className='form-label'>Usuario do Professor</label>
                <input value={usuario } name='usuario' onChange={changeHandler} type='text' id='usuarioProfessor' className='form-control' />
            </div>
            <div className='mb-4'>
                <label htmlFor='senhaProfessor' className='form-label'>Senha do Professor</label>
                <input value={senha} name='senha' onChange={changeHandler} type='text' id='senhaProfessor' className='form-control' />
            </div>
            <div className='mb-4'>
                <label htmlFor='idprofessorcourse' className='form-label'>Price do Curso</label>
                <input value={id_courses} name='id_courses' onChange={changeHandler} type='number' id='idprofessorcourse' className='form-control' />
            </div>
            <button type='submit' className='btn btn-primary'>Submit</button>
        </form>
    );
}

export default FormProfessor;