import React from 'react'
import Nav from './components/navbar/Nav'
import Main from './components/main/Main'
import Projects from './components/projects/Projects'
import "./App.css"
import Footer from './components/footer/Footer'


const App = () => {
  return (
    <div>
      <Nav /> 
      <Main/>
      <Projects/>
      <Footer/>
    </div>
  )
}

export default App