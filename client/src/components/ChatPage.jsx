import { useState, useEffect } from "react";
import axios from 'axios'

const BASE_URL = 'http://localhost:3001'

const ChatPage = () => {
const [message, setMessage] = useState('')
const [msgs, setMsgs] = useState([])
const [update, setUpdate] = useState('')
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
      setUpdate(Math.random())
    }
  }

    useEffect(() => {
    const getMsgs = async () => {
      console.log('getting all msgs')
      let res = await axios.get(`${BASE_URL}/messages`)
      console.log(res.data)
      setMsgs(res.data)
    }
      getMsgs()
    }, [update])
  
  
    //move to chats page with delete chats button when ready 
    const clearMessages = async (event) => {
      setUpdate(Math.random())
      await axios.delete(`${BASE_URL}/messages`)
    }

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
          <button onClick={clearMessages}>Clear Chat</button>
      </div>
      <div className="chat-body">
            { msgs ? msgs.map((msg) => (
             <div>{msg.body}</div>
            )) : '' }
      </div>
      <div className="chat-footer">
    <form>
      <input id="body" type="text" placeholder="Message" onChange={handleChange} onSubmit={sendMessage} value={message}/>
      <button type="submit" onClick={sendMessage}>send</button>
    </form>
      </div>
    </div>
  )
}

export default ChatPage



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