import axios from 'axios'
import { useState } from 'react'
import { useEffect } from "react"

const BASE_URL = 'http://localhost:3001'

const Chats = () => {
  const [chats, setChats] = useState([])
  const [update, setUpdate] = useState('')

  useEffect(() => {
  const getChats = async () => {
    console.log('getting all users')
    let res = await axios.get(`${BASE_URL}/chats`)
    console.log(res.data)
    setChats(res.data)
  }
    getChats()
  }, [update])


  //move to chats page when ready
  const deleteChats = async (event) => {
    // event.preventDefault() <--- prevents refresh so name doesnt auto update
    setUpdate('1')
    await axios.delete(`${BASE_URL}/chats`)
  }

return (
<div>
  <div className='chat-list'>
    { chats ? chats.map((chat) => (
      <div>{chat.name}</div>
    )) : '' }
  </div>
  <button onClick={deleteChats}>Delete Chats</button>
</div>
)
}

export default Chats