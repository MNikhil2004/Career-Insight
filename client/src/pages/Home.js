import React from 'react'
import Hero from '../components/hero/Hero'
import Popular from '../components/popular/Popular'
import Newly from '../components/newlyadded/Newly'
import NewsLetter from '../components/newsletter/NewsLetter'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Newly/>
      <NewsLetter/>
    </div>
  )
}

export default Home