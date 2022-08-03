import React from "react";
import "./App.css"
import insta from '../assets/img/5.jfif';
import face from '../assets/img/7.jfif';
import whats from '../assets/img/6.jfif';



const Footer = () =>{
    return(

        <div className="footer">
            
             <a href="#"> <img className="soc-img" src={insta} alt="cursoimg" /></a>
             <a href="#"> <img className="soc-img" src={face} alt="cursoimg" /></a>
             <a href="#"> <img className="soc-img" src={whats} alt="cursoimg" /></a>
              <div className="text-foot" >

              <span>Toti For Kids</span>
              
              <br />
             
             <span>Endereço: Av. dos Bancários, 90 - Ponta da Praia.Santos,SP</span>

             </div>
             
           
            
            </div> 
    )
}
export default Footer;