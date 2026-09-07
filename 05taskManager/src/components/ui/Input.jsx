import React from 'react'

const Input = () => {
  return (
    <div className='flex flex-col'>
        <label className='text-xl font-semibold '>Email</label>
        <input type="email" placeholder='Enter your email' className=' border mb-2 p-2 rounded'/>
    </div>
  )
}

export default Input