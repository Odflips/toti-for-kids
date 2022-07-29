import React from 'react'

const ListEstudantes= ({ estudantes }) => {
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>ID Estudiante</th>
                    <th>Nome do Estudiante</th>
                    <th>Usuario</th>
                    <th>Email</th>
                    <th>Senha</th>
                    <th>Re-Senha</th>
                </tr>
            </thead>
            <tbody>
                {estudantes.map(estudante => (
                    <tr key={estudante.idEstudantes}>
                        <th>{estudante.nome}</th>
                        <th>{estudante.usuario}</th>
                        <th>{estudante.email}</th>
                        <th>{estudante.senha}</th>
                        <th>{estudante.resenha}</th>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default ListEstudantes;
