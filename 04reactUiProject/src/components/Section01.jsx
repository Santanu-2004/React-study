import React from 'react'
import Navbar from './Navbar'
import HeroContent from './HeroContent'

const Section01 = (props) => {
  return (
    <>
    <Navbar/>
    <HeroContent users={props.users}/>
    </>
  )
}

export default Section01