import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Users from './Users'

const BASE_URL = 'http://localhost:3001'

function UserForm() {
  const initialState = { username: '', image:'' };
  const [formState, setFormState] = useState(initialState);

  const handleChange = event => {
    setFormState({ ...formState, [event.target.id]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // do something with the data in the component state
    console.log(formState);
    //await
    let res = await axios.post(`${BASE_URL}/users`, formState)
    console.log(res)
    // clear the form
    setFormState(initialState);
  };
  // Note that we need to use `htmlFor` instead of `for` in JSX

  return (
  <div>
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input
        id="username"
        type="text"
        onChange={handleChange}
        value={formState.username}
        />
      <label htmlFor="image">Image Link:</label>
      <input
        id="image"
        type="text"
        onChange={handleChange}
        value={formState.image}
        />
      <button type="submit">Login</button>
    </form>
    <Users />
  </div>
  );
}
export default UserForm;