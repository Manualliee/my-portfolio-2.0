import  portfolioPic  from './assets/IMG_1658.jpg';
import { Nav } from './Nav';
import { Skills } from './Skills';
import { Projects } from './Projects';
import { Contact } from './Contact';
import './App.css'

function App() {

  return (
    <div className='portfolio-body'>
      <div className='portfolio-container'>
        <header className='portfolio-header'>
          <Nav />
        </header>

        <section className='portfolio-greeting'>
          <div className='greeting'>
            <h1>
              Hello there! I am <span>Manuel Francisco Venegas</span>.
            </h1>

            <p className='portfolio-discription'>
              Based in the US, I am a front-end developer
              that is passionate in brining beautiful and great
              UI/UX layouts to life.
            </p>

            <a href='#contact'>CONTACT ME</a>
          </div>
          
          <div className='picture'>
            <img 
              className='portfolio-picture' 
              src={portfolioPic} 
              alt='a picture of myself' 
              width={'445px'}
              height={'720px'}
            />
          </div>
        </section>

        <section className='portfolio-skills'>
          <Skills />
        </section>

        <section className='portfolio-project'>
          <h2>Projects</h2>
          <Projects />
        </section>
      </div>

      <footer id='contact' className='portfolio-contact'>
          <Contact />
      </footer>
    </div>
  )
}

export default App
