import React from "react";
import curso1 from "../assets/img/curso1.png"
import curso2 from "../assets/img/curso2.png"
import curso3 from "../assets/img/curso3.png"
import curso4 from "../assets/img/curso4.png"

const Cursos =()=>{
    return(
        <div>

      
        <h2 style={{textAlign:"center", marginTop:80}}>Currículo dos nossos cursos ao Vivo</h2>
        <div className="cursos">
            
          <div className="cursos1">
            <img className="cursoimg" src={curso1}/>
            <h3 className="text">Curso 1</h3>
            <p className="text">Valor</p>
          </div>
          <div className="cursos1">
            <img className="cursoimg" src={curso2}/>
            <h3 className="text">Curso 2</h3>
            <p className="text">Valor</p>
          </div>
          <div className="cursos1">
            <img className="cursoimg" src={curso3}/>
            <h3 className="text">Curso 3</h3>
            <p className="text">Valor</p>
          </div>
          <div className="cursos1">
            <img className="cursoimg" src={curso4}/>
            <h3 className="text">Curso 4</h3>
            <p className="text">Valor</p>
          </div>
        </div>
        </div>
    )
}
export default Cursos;