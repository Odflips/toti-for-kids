
import './App.css';
import mascota from './assets/img/mascota.png';
import logo from './assets/img/logo.png';
import img1 from './assets/img/1.png';
import img2 from './assets/img/2.png';
import img3 from './assets/img/3.png';
import img4 from './assets/img/4.png';
import img5 from './assets/img/img1.png';
import img6 from './assets/img/img2.png';
import img7 from './assets/img/img3.png';
import img8 from './assets/img/img4.png';

import insta from './assets/img/5.jfif';
import face from './assets/img/7.jfif';
import whats from './assets/img/6.jfif';



function App() {
  return (
    <div className="App">
      <header className="cabeçalho">
        <div className="Logo">
          <img className="img" src={logo}/>
        </div>

        <div className="login">
        <div className="Item-menu">
          <a href="#">Estudante</a>

        </div>
        <div className="Item-menu">
          <a href="#">Professor</a>

        </div>
        </div>
      </header>
      <div className="main">

        
        <div className="Section">
          <div className="video">
          <iframe className="video1" width="560" height="315" src="https://www.youtube.com/embed/EGgdCryC8Uo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

          </div>

          <div className="mascota">
           <img className="robot" src={mascota}/>
          </div>

        </div>
        <div className="section2">
          <div className="Texto">
            <h3>Titulo del Texto </h3>

            <p>Parrafo a ser definido</p>
          </div>

        </div>

        <div className="cursos">
          <div className="cursos1">
            <img className="cursoimg" src={img1}/>
            <h3 className="text">Curso 1</h3>
            <p className="text">Valor</p>
          </div>
          <div className="cursos1">
            <img className="cursoimg" src={img2}/>
            <h3 className="text">Curso 2</h3>
            <p className="text">Valor</p>
          </div>
          <div className="cursos1">
            <img className="cursoimg" src={img3}/>
            <h3 className="text">Curso 3</h3>
            <p className="text">Valor</p>
          </div>
          <div className="cursos1">
            <img className="cursoimg" src={img4}/>
            <h3 className="text">Curso 4</h3>
            <p className="text">Valor</p>
          </div>
        </div>

        <div className="conteudo">
         <div className="slides">
            <input type="radio" name="slide" id="slide1"/>
            <input type="radio" name="slide" id="slide2"/>
            <input type="radio" name="slide" id="slide3"/>
            <input type="radio" name="slide" id="slide4"/>
            <input type="radio" name="slide" id="slide5"/>

            <div className="slide s1">
                <img src={img5}/>

            </div>
            <div className="slide s2">
                <img src={img6}/>
                
            </div>
            <div className="slide s3">
                <img src={img7}/>
                
            </div>
            <div className="slide s4">
                <img src={img8}/>
                
            </div>
                <div className="slide s5">
                  <img src={img6}/>
                
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

        <footer className="footer">
          <div className="social">
            <img className="soc-img" src={whats}/>
            <img className="soc-img" src={insta}/>
            <img className="soc-img" src={face}/>
          </div>

          <div className="Logo">
          <img className="img" src={logo}/>
         </div>

        </footer>

        

      </div>
    </div>
  );
}

export default App;
