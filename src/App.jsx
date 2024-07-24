import { useState } from 'react'
import NavBar from './components/NavBar'
import Hero from './components/hero'
import Galeria from './components/galeria'
import Services from './sections/Services'
import Beneficios from './components/beneficios'
import Beneficies from './sections/beneficies'
import Pagos from './sections/Pagos'
import Testimonios from './sections/Testimonios'
import Map from './components/Map'
function App() {

  return (
    <>
      <div className='bg-lightTheme-background dark:bg-darkTheme-background'>
        {/* <NavBar /> */}
        <Hero />
        
        <Beneficies />

        <Services />
        <Pagos />
        <Testimonios />
        <Map />
        {/* <Galeria /> */}
      </div>
    </>
  )
}

export default App;