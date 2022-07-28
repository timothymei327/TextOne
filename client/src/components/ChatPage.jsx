import { useState, useEffect } from "react";
import axios from 'axios'

const BASE_URL = 'http://localhost:3001'

const ChatPage = () => {
const [message, setMessage] = useState('')
// const [messageList, setMessageList] = useState ([{room: '', sender: '', message: '', time: ''}])
// console.log(messageList)

  const handleChange = (event) => {
    setMessage( event.target.value );
  };

  const sendMessage = async (event) => {
    event.preventDefault()
    if (message !== '') {
      let res = await axios.post(`${BASE_URL}/messages`, {body: message})
      console.log(res)
      setMessage('')
    }
  }

    useEffect(() => {
     const renderMessages = async() => {
        let messages = await axios.get(`${BASE_URL}/messages`)
      }
    }, [])

      // const messageInfo = {
      //   room: roomName,
      //   sender: username,
      //   message: message,
      //   time: new Date(Date.now()).getHours() + ':' + new Date(Date.now()).getMinutes()
      // }}

  return (
    <div>
      <div className="user-container">
        {/* user component */}
      </div>
      <div className="chat-header">
      </div>
      <div className="chat-body">
        {/* {console.log(messageList)}
        {messageList.map((msg) => {
          return (
            <div className="message">
              <div className="message-content">
                <p>{msg.message}</p>
              </div>
              <div className="message-meta">
                <p>{msg.sender} </p>
                <p>{msg.time}</p>
              </div>
            </div>
          )
        })} */}
      </div>
      <div className="chat-footer">
      <input id="body" type="text" placeholder="Message" onChange={handleChange} value={message}/>
      <button onClick={sendMessage}>send</button>
      </div>
    </div>
  )
}

export default ChatPage