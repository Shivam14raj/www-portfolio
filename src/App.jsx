import React from 'react'
import Home from './Home.jsx'
import About from './About.jsx'
import Project from './Project.jsx'
import Contact from './Contact.jsx'


const App = () => {
  return (
    <>
      <section>
         <Home/>
         <About/>
         <br />
         <br />
         <Project/> 
         <br /><br /> <br />
         <Contact/> 
      </section>
    </>
   
  )
}

export default App
