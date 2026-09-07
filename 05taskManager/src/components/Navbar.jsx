import React from 'react'
import { Link } from 'react-router-dom'
import Login from '../pages/LoginOld'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center '>
        <h1 className='font-semibold mx-3.5 my-2 text-2xl'>Task Manager</h1>
        <Link to='/login'className='font-semibold mx-3.5 my-2 text-2xl px-3.5 py-2 bg-blue-500 text-white rounded'>Login</Link>
    </div>
  )
}

export default Navbar