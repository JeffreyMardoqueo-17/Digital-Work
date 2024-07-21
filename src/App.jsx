import { useState } from 'react'
import NavBar from './components/NavBar'
import Hero from './components/hero'
import Galeria from './components/galeria'
import Services from './sections/Services'
function App() {

  return (
    <>
      <div className='bg-lightTheme-background dark:bg-darkTheme-background'>
        {/* <NavBar /> */}
        <Hero />
        <Galeria />
        <Services />
      </div>
    </>
  )
}

export default App;