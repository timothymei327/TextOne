import { useState, useEffect } from "react";
import io from 'socket.io-client'
import axios from 'axios'

const BASE_URL = 'http://localhost:3001'
const socket = io.connect('http://localhost:3001')

const ChatPage = () => {

const [message, setMessage] = useState('')
const [update, setUpdate] = useState('')
// const [roomName, setRoomName] = useState('')
// const [username, setUsername] = useState('')

  const handleChange = (event) => {
    setMessage( event.target.value );
  };

  const sendMessage = async () => {
    if (message !== '') {
      let chats = await axios.get(`${BASE_URL}/chats`)
      let roomName = chats.data[0].name
      console.log(roomName)
      let senderName = await axios.get(`${BASE_URL}/users`)
      let username = senderName.data[0].username
      console.log(username)

      const messageInfo = {
        room: roomName,
        sender: username,
        message: message,
        time: new Date(Date.now()).getHours() + ':' + new Date(Date.now()).getMinutes()
      }
      await socket.emit('send_message', messageInfo)
     // clear the form
     setMessage('');
  }}
  
useEffect(() => {
  socket.on('receive_message', (data) => {
    //create received text bubble
    console.log(data)
    // alert(data.message)
  })
}, [socket])

  return (
    <div>
      <div className="user-container">
        {/* user component */}
      </div>
      <div className="chat-header">
      </div>
      <div className="chat-body"></div>
      <div className="chat-footer">
      <input type="text" placeholder="Message" onChange={handleChange} value={message}/>
      <button onClick={sendMessage}>send</button>
      input needs onChange and onSubmit
      </div>
    </div>
  )
}

export default ChatPage