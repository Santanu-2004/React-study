import React from 'react'
import { Link } from 'react-router-dom'
import Login from '../pages/login'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center '>
        <h1>Task Manager</h1>
        <Link to='/login'>Login</Link>
    </div>
  )
}

export default Navbar