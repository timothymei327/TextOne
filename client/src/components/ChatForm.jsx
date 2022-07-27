import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Chats from './Chats'

const BASE_URL = 'http://localhost:3001'

function ChatForm() {
  // let navigate = useNavigate()

  const initialState = { name: '' };
  const [formState, setFormState] = useState(initialState);

  const [modification, setModification] = useState(initialState)

  const handleChange = event => {
    setFormState({ ...formState, [event.target.id]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // do something with the data in the component state
    console.log(formState);
    //await
    let res = await axios.post(`${BASE_URL}/chats`, formState)
    console.log(res)
    // clear the form
    setFormState(initialState);
    // navigate(`/chat`)
    //prob change to chat id later when integrating chat rooms
  };
  // Note that we need to use `htmlFor` instead of `for` in JSX

  const changeModification = async (event) => {
    setModification({...modification, [event.target.id]: event.target.value})
  }

  const submitModificaiton = async (event) => {
    event.preventDefault()
    let res = await axios.put(`${BASE_URL}/chat`, modification)
    console.log(res)
    setModification(initialState)
  }

  return (
  <div>
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        type="text"
        onChange={handleChange}
        value={formState.name}
        />
      <button type="submit">Login</button>
    </form>
    <form onSubmit={submitModificaiton}>
      <label>Update Username:</label>
      <input id="name" type="text" onChange={changeModification} value={modification.username}/>
      <button type="submit">Update</button>
    </form>
    <Chats />
  </div>
  );
}
export default ChatForm;