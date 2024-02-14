
import './App.css'
import Header from './components/Header'
import Homemain from './components/Homemain'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skill from './components/Skills'
import Contact from './components/Contact'
import PersonalProject from './components/PersonalProject'

function App() {

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
          <center style={{padding:"10px"}}><span>©Arman s. All Rights Reserved
</span></center>

      </div>

     </div>

    </>
  )
}

export default App
