import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BASE_URL = 'http://localhost:3001'

function UserForm() {
  const initialState = { firstName: '', lastName: '', email: '', username: '', image:'' };
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
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name:</label>
      <input
        id="firstName"
        type="text"
        onChange={handleChange}
        value={formState.firstName}
      />
      <label htmlFor="lastName">Last Name:</label>
      <input
        id="lastName"
        type="text"
        onChange={handleChange}
        value={formState.lastName}
      />
      <label htmlFor="email">Email:</label>
      <input
        id="email"
        type="text"
        onChange={handleChange}
        value={formState.email}
      />
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
  );
}
export default UserForm;