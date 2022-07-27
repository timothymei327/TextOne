import axios from 'axios'
import { useState } from 'react'
import { useEffect } from "react"

const BASE_URL = 'http://localhost:3001'

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


  //move to chats page with delete chats button when ready 
  const deleteAccounts = async (event) => {
    // event.preventDefault() <--- prevents refresh so name doesnt auto update
    setUpdate('1')
    await axios.delete(`${BASE_URL}/users`)
  }

return (
<div>
  <div className='user-list'>
    { users ? users.map((user) => (
      <div>{user.username}</div>
    )) : '' }
  </div>
  <button onClick={deleteAccounts}>Delete Account</button>
</div>
)
}

export default Users