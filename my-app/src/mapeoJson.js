import React, { useEffect, useState } from "react"

function cardCourse() {

    const [courses, setCourse] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/card')
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
                <img className="imgc" src={item.imagen} alt={item.name} width="30px" />
                <h2>{item.name}</h2>
                <h3>{item.hours}</h3>
                <p> {item.activity}</p>
                <p> {item.price}</p>
                
            </div>

        ))



    );
}
