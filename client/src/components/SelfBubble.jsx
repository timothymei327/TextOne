import axios from 'axios'
import { useState } from 'react'
import { useEffect } from "react"

const BASE_URL = 'http://localhost:3001'

const Users = (props) => {
  const [selfMessage, setSelfMessage] = useState([])

  useEffect(() => {
  const getSelfMessages = async () => {
    console.log('getting all of my messages')
    let res = await axios.get(`${BASE_URL}/chat`)
    console.log(res.data)
    setSelfMessage(res.data)
  }
    getSelfMessages()
  }, [props.setUpdate])

return (
<div>
  <div className='self-messages'>
    { selfMessage ? selfMessage.map((message) => (
      <div>{message}</div>
    )) : '' }
  </div>
</div>
)
}

export default Users