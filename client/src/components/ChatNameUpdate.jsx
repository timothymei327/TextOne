import React, { useState } from 'react';
import axios from 'axios';

const BASE_URL = 'http://localhost:3001'


const ChatNameUpdate = () => {
  const initialState = { name: '' };
  const [modification, setModification] = useState(initialState)


  const changeModification = async (event) => {
    setModification({...modification, [event.target.id]: event.target.value})
  }

  const submitModificaiton = async (event) => {
    event.preventDefault()
    let res = await axios.put(`${BASE_URL}/chats`, modification)
    console.log(res)
    setModification(initialState)
  }


return (
    <form onSubmit={submitModificaiton}>
      <label>Update Chat Name:</label>
      <input id="name" type="text" onChange={changeModification} value={modification.username}/>
      <button type="submit">Update</button>
    </form> 
)}

export default ChatNameUpdate