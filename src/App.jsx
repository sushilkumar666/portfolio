
import './App.css'
import Header from './components/Header'
import Homemain from './components/Homemain'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skill from './components/Skills'
import Contact from './components/Contact'
import PersonalProject from './components/PersonalProject'
import AnimatedCursor from './components/Animatedcursor'
import { Reveal } from './components/Reveal.tsx'

function App() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };


  return (
    <>

      <div className='main-portfolio'>
        <div className='portfolio'>
          <Header />
          <Homemain />
          <p>&nbsp;</p>
          <p>&nbsp;</p>

          <Projects />

          <p>&nbsp;</p>
          <Experience />
          <p>&nbsp;</p>
          <Skill />
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <PersonalProject />
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>


          <Contact />
          <p>&nbsp;</p>
          <center style={{ padding: "10px" }}><span>@Sushilkumar s. All Rights Reserved
          </span></center>

        </div>

        <button class="button" onClick={scrollToTop}>
          <svg viewBox="0 0 384 512" class="svgIcon">
            <path
              d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
            ></path>
          </svg>
        </button>
        <AnimatedCursor />

      </div>

    </>
  )
}

export default App
