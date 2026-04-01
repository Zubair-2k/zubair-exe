import './App.css'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Cursor from './Components/Cursor/cursor'
import Experiences from './Components/Experiences/Experiences'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Projects from './Components/Projects/Projects'
import ProjectsHeader from './Components/ProjectsHeader/ProjectsHeader'
import Resume from './Components/Resume/Resume'


function App() {

  return (
    <>
      <div className="app">
        <Cursor/>
        {/* <Resume/> */}
        <Header />
        <About />
        <ProjectsHeader />
        <Projects/>
        <Experiences/>
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
