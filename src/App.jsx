import { useState } from 'react'
import NavBar from './components/NavBar'
import Hero from './components/hero'
function App() {

  return (
    <>
      <div className="">
        <NavBar />
        <Hero />
        <img src="../img/fondos.jpg" alt="" />
      </div>
    </>
  )
}

export default App