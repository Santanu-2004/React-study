import React, { useState } from "react";

const InputForm2 = () => {
  let [fromData, setFormData] = useState({
    firstName: "",
    userName: "@",
    age: "",
  });

  let handelForm = (event) => {
    let keyName = event.target.name;
    let newVal = event.target.value;
    setFormData((currData) => {
      currData[keyName] = newVal;
      return { ...currData };
      //another method can be : 
      //return { ...currData, [event.target.name]:event.target.value };
    });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      firstName: "",
      userName: "@",
      age: "",
    });
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="firstName">Name</label>
        <br />
        <input
          type="text"
          placeholder="enter your name"
          value={fromData.firstName}
          id="firstName"
          name="firstName"
          onChange={handelForm}
        />
        <br />
        <br />
        <label htmlFor="userName">User Name</label>
        <br />
        <input
          type="text"
          placeholder="enter your username"
          value={fromData.userName}
          id="userName"
          name="userName"
          onChange={handelForm}
        />
        <br />
        <br />
        <label htmlFor="age">Age</label>
        <br />
        <input
          type="text"
          placeholder="enter your Age"
          value={fromData.age}
          id="age"
          name="age"
          onChange={handelForm}
        />
        <br />
        <br />
        <button type="submit">Submit Now</button>
      </form>
    </div>
  );
};

export default InputForm2;
