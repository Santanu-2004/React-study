import React, { useState } from 'react'

const InputForm = () => {
    let [userName, setUserName] = useState("Santanu");

    const handleUserName = (e) => {
        let userNameValue = e.target.value;
        setUserName(userNameValue);
    }
  return (
    <div>
        <form action="">
        <h3>Add your comment</h3>
        <label htmlFor="userName">User Name</label>
         <br />
        <input 
        type="text" 
        placeholder='Enter your name'
        id='userName'
        name='userName'
        value={userName}
        onChange={handleUserName}
        />
        <br /><br />
        <button 
        type="submit"
        >Submit</button>
        </form>
    </div>
  )
}

export default InputForm