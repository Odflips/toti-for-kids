import React from "react"
import "../video/text"



const VideoText =()=>{
    return(
        
        <div className="Section">
        <div className="video">
        <iframe className="video1" width="560" height="315" src="https://www.youtube.com/embed/EGgdCryC8Uo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

        </div>

        <div className="Texto">
          <h2>Promovemos um relacionamento mais inteligente das crianças 
            com a tecnologia</h2>
            <br />

          <p>
          Parece que crianças já nascem sabendo mexer no smartphone. 
          E, de fato, começam<br/> a dominar tais ferramentas mais cedo do que se imagina.
         Mas, a verdade é que, muitas<br/> vezes,  usam este conhecimento para comunicação e 
         diversão. E param por aí. Por que,<br/>  então, não transformar esta afinidade natural
          com a tecnologia em profissão? “Engana-se quem pensa que a programação<br/> é útil
           somente para quem quer fazer Ciência da Computação ou Engenharia.
           Hoje, e isso será crescente no decorrer dos anos, todas as profissões 
           terão seus processos transformados. Advogados, contadores,porteiros,
            todos terão seus processos transformados diante da 4ª Revolução Industrial, 
          e dominar conceitos de programação será indispensável”, diz Mohamed Elhabiby.
          </p>
        </div>

      </div>
    )
}
export default VideoText;