import React from 'react'
import Navbar from '../Navbar'
import Body from '../Body'
import About from './About'
import Skills  from './Skills'
import Roadmap from './Roadmap'
const Home = () => {
  return (
    <div className='bg-black dark:bg-white  '>
      <Navbar/>
      <Body/>
      <About/>
      <Skills/>
      <Roadmap/>
    
    </div>
  )
}

export default Home
