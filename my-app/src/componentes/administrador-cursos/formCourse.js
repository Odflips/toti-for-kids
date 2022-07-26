import React from 'react';
import Swal from "sweetalert2";

const FormCourse = ({ course, setCourse }) => {

    const changeHandler = e => {
        setCourse({
            ...course,
            [e.target.name]: e.target.value
        })

    }

    let { nome, duracao, detalhes, price } = course

    const onSubmit = () => {
        //validacion de los inputs
        price = parseInt(price)
        if (nome === '' || duracao === '' || detalhes === '' || price <= 0) {
            alert('Toda la informacion es obligatoria')
            return
        }
        //consulta
        const requestInit = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(course)
        }

        fetch('http://localhost:3002/api/detalhes_course', requestInit)
            .then(res => res.text())
            .then((res) => {
                     
                    Swal.fire(
                      'adicionado!',
                      'O curso  foi adicionado com sucesso!',
                      'success'
                    )
                    })  
           
               


        //reiniciar el state
        setCourse({
            nome: '',
            duracao: '',
            detalhes: '',
            price: 0

        })

    }


    return (
        <form onSubmit={onSubmit}>
            <div className='mb-4'>
                <label htmlFor='nomeCourse' className='form-label'>Nome do Curso</label>
                <input value={ nome} name='nome' onChange={changeHandler} type='text' id='nomeCourse' className='form-control' />
            </div>
            <div className='mb-4'>
                <label htmlFor='duracaoCourse' className='form-label'>Duracao do Curso</label>
                <input value={duracao } name='duracao' onChange={changeHandler} type='text' id='duracaoCourse' className='form-control' />
            </div>
            <div className='mb-4'>
                <label htmlFor='detalhesCourse' className='form-label'>Detalhes do Curso</label>
                <input value={detalhes} name='detalhes' onChange={changeHandler} type='text' id='dethalesCourse' className='form-control' />
            </div>
            <div className='mb-4'>
                <label htmlFor='priceCourse' className='form-label'>Price do Curso</label>
                <input value={price} name='price' onChange={changeHandler} type='number' id='priceCourse' className='form-control' />
            </div>
            <button type='submit' className='btn btn-primary'>Submit</button>
        </form>
    );
}

export default FormCourse;