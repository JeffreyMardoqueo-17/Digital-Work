import { useState } from 'react'
import NavBar from './components/NavBar'
import Hero from './components/hero'
import Galeria from './components/galeria'
import Services from './sections/Services'
import Beneficios from './components/beneficios'
import Beneficies from './sections/beneficies'
function App() {

  return (
    <>
      <div className='bg-lightTheme-background dark:bg-darkTheme-background'>
        {/* <NavBar /> */}
        <Hero />
        
        <Beneficies />

        <Services />
        {/* <Galeria /> */}
      </div>
    </>
  )
}

export default App;