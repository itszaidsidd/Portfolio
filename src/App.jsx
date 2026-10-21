import './App.css'
import About from './componets/About'
import Contact from './componets/Contact'
import Hero from './componets/Hero'
import Navbar from './componets/Navbar'
import Project from './componets/Project'

function App() {

  return (
    <div className='font-sans'>
     <Navbar/>
     <Hero/>
     <About/>
     <Project/>
     <Contact/>
    </div>
  )
}

export default App
