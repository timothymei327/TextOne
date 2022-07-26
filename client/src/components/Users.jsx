import axios from 'axios'
import { useState } from 'react'
import { useEffect } from "react"

const BASE_URL = 'http://localhost:3001'

const Users = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
  const getUsers = async () => {
    console.log('getting all users')
    let res = await axios.get(`${BASE_URL}/users`)
    console.log(res.data)
    setUsers(res.data)
  }
    getUsers()
  }, [])

return (
  <div className='user-list'>
    { users ? users.map((user) => (
      <div>{user.username}</div>
    )) : '' }
  </div>
)
}

export default Users