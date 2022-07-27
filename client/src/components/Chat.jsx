import { useState, useEffect } from "react";
import io from 'socket.io-client'
import axios from 'axios'

const socket = io.connect('http://localhost:3001')

const Chat = () => {

const [message, setMessage] = useState('')
const [update, setUpdate] = useState('')

  const handleChange = (event) => {
    setMessage( event.target.value );
  };

  const sendMessage = async () => {
    socket.emit('send_message', {message: message})
    // clear the form
    setMessage('');
  }
  
useEffect(() => {
  socket.on('receive_message', (data) => {
    //create received text bubble
    alert(data.message)
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

export default Chat