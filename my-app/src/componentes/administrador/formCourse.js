import React from 'react';

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

        fetch('http://localhost:3002/api', requestInit)
            .then(res => res.json())
            .then(res => console.log(res))

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
                <input name='nome' onChange={changeHandler} type='text' id='nomeCourse' className='form-control' />
            </div>
            <div className='mb-4'>
                <label htmlFor='duracaoCourse' className='form-label'>Duracao do Curso</label>
                <input name='duracao' onChange={changeHandler} type='text' id='duracaoCourse' className='form-control' />
            </div>
            <div className='mb-4'>
                <label htmlFor='detalhesCourse' className='form-label'>Detalhes do Curso</label>
                <input name='detalhes' onChange={changeHandler} type='text' id='dethalesCourse' className='form-control' />
            </div>
            <div className='mb-4'>
                <label htmlFor='priceCourse' className='form-label'>Price do Curso</label>
                <input name='price' onChange={changeHandler} type='number' id='priceCourse' className='form-control' />
            </div>
            <button type='submit' className='btn btn-primary'>Submit</button>
        </form>
    );
}

export default FormCourse;