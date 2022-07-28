import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Chats from './Chats'
import { useEffect } from 'react';
// import {io} from 'socket.io-client'

const BASE_URL = 'http://localhost:3001'

function ChatForm(props) {
  let navigate = useNavigate()
  let socket=props.socket

  const initialState = { name: '' };
  const [formState, setFormState] = useState(initialState);
  const [modification, setModification] = useState(initialState)
  const [user, setUser] = useState('')

  const enterChat = () => {
    if (formState.name !== '')
    socket.emit('join_room', formState.name)
  }

  const handleChange = event => {
    setFormState({ ...formState, [event.target.id]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    enterChat()
    // do something with the data in the component state
    console.log(formState);
    //await
    let chats = await axios.get(`${BASE_URL}/chats`)
    if (chats.data.length == 0 ){
    let res = await axios.post(`${BASE_URL}/chats`, formState)
    console.log(res)
    // clear the form
    setFormState(initialState);
    navigate(`/chat-page`)
    //prob change to chat id later when integrating chat rooms
  }}
  // Note that we need to use `htmlFor` instead of `for` in JSX

  const changeModification = async (event) => {
    setModification({...modification, [event.target.id]: event.target.value})
  }

  const submitModificaiton = async (event) => {
    event.preventDefault()
    let res = await axios.put(`${BASE_URL}/chats`, modification)
    console.log(res)
    setModification(initialState)
  }

useEffect(() => {
  const displayUser = async(req, res) => {
    let currentUser = await axios.get(`${BASE_URL}/users`)
    setUser(currentUser.data[0].username)
  }
  displayUser()
}, [])



  return (
  <div>
    <h1>Welcome, {user} what will your chat name be?</h1>
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Chat Name:</label>
      <input
        id="name"
        type="text"
        onChange={handleChange}
        value={formState.name}
        />
      <button type="submit">Login</button>
    </form>
    <form onSubmit={submitModificaiton}>
      <label>Update Chat Name:</label>
      <input id="name" type="text" onChange={changeModification} value={modification.username}/>
      <button type="submit">Update</button>
    </form>
    <Chats />
  </div>
  );
}
export default ChatForm;