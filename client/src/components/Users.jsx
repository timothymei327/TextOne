import axios from 'axios'
import { useState } from 'react'
import { useEffect } from "react"

const BASE_URL = 'https://polar-taiga-21134.herokuapp.com'

const Users = () => {
  const [users, setUsers] = useState([])
  const [update, setUpdate] = useState('')

  useEffect(() => {
  const getUsers = async () => {
    console.log('getting all users')
    let res = await axios.get(`${BASE_URL}/users`)
    console.log(res.data)
    setUsers(res.data)
  }
    getUsers()
  }, [update])


  const deleteAccounts = async (event) => {
    setUpdate('1')
    await axios.delete(`${BASE_URL}/users`)
  }

return (
<div>
  <div className='user-list'>
    { users ? users.map((user) => (
      <div>Current User: {user.username}</div>
    )) : '' }
  </div>
  <button onClick={deleteAccounts}>Log Out</button>
</div>
)
}

export default Users