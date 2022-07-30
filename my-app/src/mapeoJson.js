import React, { useEffect, useState } from "react"
import CheckBox from './componentes/CheckBox'


<<<<<<< HEAD

function cardCourse() {

=======
function cardCourse(){
>>>>>>> 0ce413d0061e24884c50eaf9c7bf411943749542

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
<<<<<<< HEAD

    const card = cardCourse()

=======
    const card = cardCourse()

        
        /*const [courses, setCourse] = useState([])
    
        useEffect(() => {
            fetch('http://localhost:5000/card')
                .then(response => response.json())
                .then(datos => {
                    setCourse(datos)
                })
        }, [])*/
>>>>>>> 0ce413d0061e24884c50eaf9c7bf411943749542

    return (


        card.map(item => (
            <div className="container2">
                <img className="imgc" src={item.imagen} alt={item.nome} width="30px" />
                <h2>{item.nome}</h2>
                <h3>{item.duracao}</h3>
                <p> {item.detalhes}</p>
                <p> {item.price}</p>
                <CheckBox />
                

                
                
                
            </div>

        ))



    );
}
