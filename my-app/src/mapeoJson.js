import React, { useEffect, useState } from "react"

function cardCourse() {

    const [courses, setCourse] = useState([])

    useEffect(() => {
        fetch("http://localhost:3004/card")
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
            <div className="container">

                <h2>{item.name}</h2>
                <h3>{item.address}</h3>
                <p> {item.phone}</p>
                <img src={item.img} alt={item.name} width="30px" className="img-fluid" />
            </div>

        ))



    );
}
