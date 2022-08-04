import React from "react";
import curso1 from "../assets/img/curso1.png"
import curso2 from "../assets/img/curso2.png"
import curso3 from "../assets/img/curso3.png"
import curso4 from "../assets/img/curso4.png"

const Cursos =()=>{
    return(
        <div>

      
        <h2 style={{textAlign:"center", marginTop:80}}>VENHA APRENDER COM NÓS!</h2>
        <div className="cursos">
            
          <div className="cursos1">
            <img className="cursoimg" src={curso1} alt="cursoimg" />
            <h3 className="text">FRONT-END BÁSICO</h3>
            
          </div>
          <div className="cursos1">
            <img className="cursoimg" src={curso2} alt="cursoimg" />
            <h3 className="text">REACT NATIVE</h3>
            
          </div>
          <div className="cursos1">
            <img className="cursoimg" src={curso3} alt="cursoimg" />
            <h3 className="text">BACK-END BÁSICO</h3>
            
          </div>
          <div className="cursos1">
            <img className="cursoimg" src={curso4} alt="cursoimg" />
            <h3 className="text">UX/UI</h3>
            
          </div>
        </div>
        </div>
    )
}
export default Cursos;