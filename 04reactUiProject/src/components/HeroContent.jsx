import React from 'react'
import HeroText from './HeroText'
import HeroCards from './HeroCards'

const HeroContent = () => {
  return (
    <div className='flex flex-col mx-10 md:flex-row h-[90dvh]'>
      <HeroText />
      <HeroCards />
    </div>
  )
}

export default HeroContent
