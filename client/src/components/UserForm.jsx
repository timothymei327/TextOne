import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Users from './Users'

const BASE_URL = 'https://polar-taiga-21134.herokuapp.com'

function UserForm() {
  let navigate = useNavigate()

  const initialState = { username: '', image:'' };
  const [formState, setFormState] = useState(initialState);

  const handleChange = event => {
    setFormState({ ...formState, [event.target.id]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    let users = await axios.get(`${BASE_URL}/users`)
    if (users.data.length == 0 ){
    let res = await axios.post(`${BASE_URL}/users`, formState)
    console.log(res)
    setFormState(initialState);
    navigate(`/chat-form`)
  }}

  return (
  <div className='landing-page'>
    <h1 className='main-title'>TextOne</h1>
    <div className='landing-content'>
      <h3>Create a username and add a link to your profile picture!</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username: </label>
          <input
            id="username"
            type="text"
            onChange={handleChange}
            value={formState.username}
            />
        <label htmlFor="image" className='image-link'>Image Link: </label>
          <input
            className='image-link-input'
            id="image"
            type="text"
            onChange={handleChange}
            value={formState.image}
            />
        <button type="submit">Login</button>
      </form>
    <Users />
    </div>
  </div>
  );
}
export default UserForm;