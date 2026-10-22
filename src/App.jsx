import About from './componets/About'
import Contact from './componets/Contact'
import Footer from './componets/Footer'
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
     <Footer/>
    </div>
  )
}

export default App
