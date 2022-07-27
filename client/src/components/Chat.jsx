import { useState, useEffect, ReactDOM, createRoot } from "react";
// import { ReactDOM } from 'react-dom'
import SelfBubble from './SelfBubble'
import io from 'socket.io-client'
import axios from 'axios'

const socket = io.connect('http://localhost:3001')

const Chat = () => {

const [message, setMessage] = useState('')
const [update, setUpdate] = useState('')

useEffect(() => {
  socket.on('receive_message', (data) => {
    //create received text bubble
    alert(data.message)
  })
}, [socket])


  const handleChange = (event) => {
    setMessage( event.target.value );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(message);

    const sendMessage = async () => {
      if (message !== ''){
        socket.emit('send_message', {message: message})
      }
      sendMessage()
      // clear the form
      setMessage('');
    }
  };



  return (
    <div>
      <div className="user-container">
        {/* user component */}
      </div>
      <div className="chat-header">
        {/* <SelfBubble setUpdate={setUpdate()}/> */}
      </div>
      <div className="chat-body"></div>
      <div className="chat-footer">
      <input type="text" placeholder="Message" onChange={handleChange} value={message}/>
      <button onClick={handleSubmit}>send</button>
      input needs onChange and onSubmit
      </div>
    </div>
  )
}

export default Chat