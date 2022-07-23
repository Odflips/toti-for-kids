import React from "react";
import slide1 from "../assets/img/slide1.jpg"
import slide2 from "../assets/img/slide2.png"
import slide3 from "../assets/img/slide3.png"
import slide4 from "../assets/img/slide4.png"
import './App.css'


const BannerHome =()=>{
   return(
    <div className="conteudo">
    <div className="slides">
       <input type="radio" name="slide" id="slide1"/>
       <input type="radio" name="slide" id="slide2"/>
       <input type="radio" name="slide" id="slide3"/>
       <input type="radio" name="slide" id="slide4"/>
       <input type="radio" name="slide" id="slide5"/>

       <div className="slide s1">
           <img src={slide1}/>
       </div>
       
       <div className="slide s2">
           <img src={slide2}/>
       </div>
       
       <div className="slide s3">
           <img src={slide3}/>
       </div>
       
       <div className="slide s4">
           <img src={slide4}/>
       </div>
     
    </div>
    

   <div className="navigation">
       <label className="bar" for="slide1"></label>
       <label className="bar" for="slide2"></label>
       <label className="bar" for="slide3"></label>
       <label className="bar" for="slide4"></label>
       <label className="bar" for="slide5"></label>
   </div>
  

  
</div> 
 
   )
}
  export default BannerHome;
