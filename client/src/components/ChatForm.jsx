import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Chats from './Chats'
import UserForm from './UserForm';
import { useEffect } from 'react';

const BASE_URL = 'http://localhost:3001'

function ChatForm() {
  let navigate = useNavigate()

  const initialState = { name: '' };
  const [formState, setFormState] = useState(initialState);
  // const [modification, setModification] = useState(initialState)
  const [user, setUser] = useState('')

  const handleChange = event => {
    setFormState({ ...formState, [event.target.id]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    //await
    let chats = await axios.get(`${BASE_URL}/chats`)
    if (chats.data.length == 0){
    let res = await axios.post(`${BASE_URL}/chats`, formState)
    console.log(res)
    // clear the form
    setFormState(initialState);
    navigate(`/chat-page`)
    //prob change to chat id later when integrating chat rooms
  }
}

useEffect(() => {
  const displayUser = async(req, res) => {
    let currentUser = await axios.get(`${BASE_URL}/users`)
    let recentUserIndex = currentUser.data.length - 1
    setUser(currentUser.data[recentUserIndex].username)
  }
  displayUser()
}, [])



  return (
  <div className='chat-form-page'>
    <h1>Welcome, {user} what will your chat name be?</h1>
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Chat Name:</label>
      <input
        id="name"
        type="text"
        onChange={handleChange}
        value={formState.name}
        />
      <button type="submit">Enter</button>
    </form>
    <Chats />
  </div>
  );
}
export default ChatForm;