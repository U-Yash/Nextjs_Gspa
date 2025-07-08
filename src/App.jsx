import React from 'react'
import Hero from './Components/Hero'
import About from './Components/About'
import Navbar from './Components/Navbar'
import Feacture from './Components/Feacture'
import Story from './Components/Story'
import Contact from './Components/contact'
import Footer from './Components/footer'
const App = () => {
  return (
     <main className='relative min-h-screen w-screen overflow-x-hidden bg-zinc-600'>
      <Navbar />
      <Hero/>
     <About />
     <Feacture/>
     <Story />
     <Contact />
     <Footer />
     </main> 
  )
}

export default App