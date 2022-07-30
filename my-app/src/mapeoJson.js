import React, { useEffect, useState } from "react"



function cardCourse() {


    const [courses, setCourse] = useState([])

    useEffect(() => {
        fetch('http://localhost:3002/loginEstudante')
            .then(response => response.json())
            .then(datos => {
                setCourse(datos)
            })
    }, [])

    return courses
}

export default function DisplayCourse() {

    const card = cardCourse()


    return (


        card.map(item => (
            <div className="container2">
                <img className="imgc" src={item.imagen} alt={item.nome} width="30px" />
                <h2>{item.nome}</h2>
                <h3>{item.duracao}</h3>
                <p> {item.detalhes}</p>
                <p> {item.price}</p>
                
            </div>

        ))



    );
}
