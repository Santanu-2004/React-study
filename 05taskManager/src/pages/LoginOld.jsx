import React from 'react'
import Input from '../components/ui/Input'
import Button from '../components/ui/Button'

const Login = () => {
  return (
    <div className='max-w-sm rounded flex flex-col justify-center gap-2 mx-auto h-screen px-3 align-middle py-5'>
      <h1 className='text-xl font-bold'>Login To Your Account</h1>
      <p className='text-sm' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore iusto fugiat omnis</p>
      <form action="">
        <Input/>
        <Input/>
        <Button/>
      </form>
      <a href="/" className='text-blue-400'>Back To Home</a>
    </div>
  )
}

export default Login