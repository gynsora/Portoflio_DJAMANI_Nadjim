import imgNadjim from '../../Assets/img/nadjim.png'
import { TypeAnimation } from 'react-type-animation';
import './About.scss'


function About() {
    return (
      <section id="about">
        <div className="about-image">
          <img src={ imgNadjim } alt="image de nadjim DJAMANI" />
        </div>
        <div className="about-content">
          <h1>Hello ! Je m'appelle DJAMANI Nadjim</h1>
          <h3>
            <TypeAnimation 
            sequence={[
              // Same substring at the start will only be typed out once, initially
              'Intégrateur Front-End',
              2000, // wait 1s before replacing "Mice" with "Hamsters"
              'Développeur React',
              2000,
              'Programmeur Python' ,
              2000,
              'Développeur Symfony',
              2000,
              'Passionné de Jeux-vidéos',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            />
          </h3>
          <p>Après plusieurs années de travail dans le domaine de la manutention , j'ai décidé de me diriger vers un domaine pour lequel je me suis découvert une passion, la programmation et plus particulièrement le développement Web.</p>
          <div className="about-social-media">
            <a href="https://www.linkedin.com/in/nadjim-djamani-759b79140/" target="_blank"><i className="fa-brands fa-linkedin-in"></i></a>
            <a href="https://github.com/gynsora" target="_blank"><i class="fa-brands fa-github"></i></a>
          </div> 
          <div className="about-links">
            <a href="/CV développeur informatique.pdf" target="_blank" className="about-btn">Télécharger CV</a> 
            <a href="#footer" className="about-btn">Contactez-moi</a>
          </div>
        </div>
      </section>
    );
  }
  
export default About;