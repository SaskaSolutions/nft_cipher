import React from 'react'
import ParallaxBanner from './Components/Parallax/Parallax'
import Projects from './Components/Projects/Projects'
import AnimatedTestimonial from './Components/AnimatedTestimonial/AnimatedTestimonial'
import './App.css'
import ParallaxSocials from './Components/Socials/ParallaxSocials'

const App = () => {
  return (
    <>
      < ParallaxBanner />
      < Projects />
      < AnimatedTestimonial />
      < ParallaxSocials />
    </>
  )
}

export default App