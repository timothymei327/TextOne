import React, { useState } from 'react';
import axios from 'axios';

const BASE_URL = 'http://localhost:3001'


const UsernameUpdate = () => {
  const [userModification, setUserModification] = useState({ username: '', image:'' })



  const changeUser = async (event) => {
    setUserModification({...userModification, [event.target.id]: event.target.value})
  }

  const submitUserModificaiton = async (event) => {
    event.preventDefault()
    let res = await axios.put(`${BASE_URL}/users`, userModification)
    console.log(res)
    setUserModification({ username: '', image:'' })
  }


return (
  <form onSubmit={submitUserModificaiton}>
  <label>Update Username:</label>
  <input id="username" type="text" onChange={changeUser} value={userModification.username}/>
  <label>Update Image Link:</label>
  <input id="image" type="text" onChange={changeUser} value={userModification.image}/>
  <button type="submit">Update</button>
</form>
)}

export default UsernameUpdate