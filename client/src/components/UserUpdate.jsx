import React, { useState } from 'react';
import axios from 'axios';

const BASE_URL = 'https://polar-taiga-21134.herokuapp.com'


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
  <input id="username" type="text" placeholder="Update Username" onChange={changeUser} value={userModification.username}/>
  <input id="image" type="text" classname="update-image-link" placeholder="Update Image Link" onChange={changeUser} value={userModification.image}/>
  <button type="submit">Update User</button>
</form>
)}

export default UsernameUpdate