import React from 'react'
import './Hero.css'
import logo from '../assets/logo123.jpg'
// import background from '../assets/background.jpeg'

const Hero = () => {
  return (
    <div className='Hero'>
      <p><b>CAREER INSIGHT</b> focuses on creating a website that super easy to use and has everything
necessary for people looking for jobs in the software industry. This website will be like a
treasure trove, containing interview questions, tips on job hunting, details about different
companies, and insights into the latest technologies. The main idea is to make job
hunting simpler and more efficient for both employers and job seekers by gathering all
these useful resources in one convenient spot.</p>
<img className='img12' src={logo} alt='Interview Guide logo' />
    </div>
    
  )
}

export default Hero