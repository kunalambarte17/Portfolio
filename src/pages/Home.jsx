import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import MainSec from '../components/MainSec/MainSec'
import About from '../components/About/About'
import Contact from '../components/KeepTouch/Contact'
import Skills from '../components/Skills/Skills'
import Footer from '../components/Footer/Footer'
import Form from '../components/FormContainer/Form'

function Home() {
  return (
    <div>
      <Navbar/>
      <MainSec/>
      <About/>
      <Skills/>
      <Contact/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Home
