import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import LoginOld from './pages/LoginOld'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<LoginOld/>} />
    </Routes>
    </>
  )
}

export default App