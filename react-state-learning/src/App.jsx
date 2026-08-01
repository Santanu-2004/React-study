import { useState } from 'react'
import './App.css'
import Counter from './Counter'
import LikeButton from './LikeButton'
import LudoGame from './LudoGame'

function App() {
  return (
    <>
      {/* <h1>Like the page now</h1> */}
      {/* <Counter/> */}
      <LikeButton/>
      <h1>lets Play Ludo</h1>
      <LudoGame/>
    </>
  )
}

export default App
