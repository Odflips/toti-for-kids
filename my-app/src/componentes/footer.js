import React from "react";
import "./App.css"
import insta from '../assets/img/5.jfif';
import face from '../assets/img/7.jfif';
import whats from '../assets/img/6.jfif';



const Footer = () =>{
    return(

        <div className="footer">
            
             <a href="#"> <img className="soc-img" src={insta}/></a>
             <a href="#"> <img className="soc-img" src={face}/></a>
             <a href="#"> <img className="soc-img" src={whats}/></a>
              <div >

              <span>Toti For Kids</span>
              
              <br />
             
             <span>Endereço: Rua Maria de feitas,455.Santos,SP</span>

             </div>
             
           
            
            </div> 
    )
}
export default Footer;