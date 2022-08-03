import React from "react";
import '../src/componentes/App.css';
import mascota from './assets/img/mascota.png';
import Footer from './componentes/footer';
import Cursos from "./componentes/cursos";
import VideoText from "./componentes/video/text";




 const Home =() => {
  return (
    <div className="App">
      
      <div className="main">
        

        <div className="sectionprincipal">
        <h1 style={{textAlign:"center", color:"indigo",fontWeight:"bold"}}>Olá!</h1>
        
        <img className="robotPrincipal"src={mascota} alt="cursoimg" />
        
           
          
        <p></p>
          
        </div>
        
         
         <VideoText />
         <Cursos />
        
        <div className="section2">
          <div className="mascota">
           
            <div>
            </div>
            <img className="robot"src={mascota} alt="cursoimg" />
          </div>
          <div className="textofinal">
            <h3> Voçe Sabia?</h3>
             
            <p>Porque  Vale a pena ensinar Programação às criançãs,a continuação 5 razões:</p>
             <ol>
            
            
             <li>Estimula a criatividade: a programação é um ótimo estímulo ao potencial criativo das crianças, uma eficaz ferramenta que os incentiva, de maneira divertida, a explorarem suas capacidades.</li> 
             
             <li>Melhora o raciocínio lógico: transformar crianças em criadoras de tecnologias exercita e incentiva a habilidade de encontrar respostas, por meio de pensamentos coerentes.</li>
             
             <li>Desperta o empreendedorismo: a demanda do mercado de tecnologia por bons programadores só cresce. Em pouco tempo, saber programar no século 21, será tão importante quanto saber ler e escrever no século 20, o que expandirá ainda mais as oportunidades para profissionais da área.</li>
             
             <li>Auxilia na solução de problemas: ao  programar é necessário aprender a estruturar o pensamento de forma clara e objetiva, para que a máquina possa entender o passo a passo e executar corretamente as ordens do programador. Tal exercício diário, desenvolve habilidades utilizadas para solucionar problemas corriqueiros com mais naturalidade e rapidez.</li>
            
            <li>Desenvolve o trabalho em equipe: a construção de softwares é baseada na forte interação e comunicação entre os membros participantes do projeto, o que implica em troca de conhecimento e capacidade de ouvir. Utilizar positivamente as tecnologias disponíveis por meio do ensino e orientação às crianças é uma poderosa arma para a construção de uma sociedade melhor.</li>
             </ol> 
            </div>
        </div>

        
     </div>
        <Footer />

    </div>
   
  );
}

export default Home;

