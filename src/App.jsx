import { useState } from 'react'
import NavBar from './components/NavBar'
import Hero from './components/hero'
import Galeria from './components/galeria'
function App() {

  return (
    <>
      <div className='bg-blue-700 h-screen w-screen'>
        {/* <NavBar /> */}
        <Hero />
        <Galeria />
      </div>
    </>
  )
}

export default App