import { useState, useEffect } from "react";
import axios from 'axios'
import Users from "./Users";
import UserForm from "./UserForm";

const BASE_URL = 'http://localhost:3001'

const ChatPage = () => {
const [message, setMessage] = useState('')
const [msgs, setMsgs] = useState([])
const [users, setUsers] = useState([])
const [profileImg, setProfileImg] = useState([])
const [update, setUpdate] = useState('')

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
    const clearMessages = async (event) => {
      setUpdate(Math.random())
      await axios.delete(`${BASE_URL}/messages`)
    }

    
    return (
      <div className="page-container">
        <div className="user-container">
          {/* user component */}
          <div className="user-list">
          { users ? users.map((user) => (
            <div>
              <div>{user.username}</div>
              <img src={user.image} alt="profile image" className="profile-image"/>
            </div>
          )) : '' }
          </div>
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




// const [messageList, setMessageList] = useState ([{room: '', sender: '', message: '', time: ''}])
// console.log(messageList)

// const messageInfo = {
//   room: roomName,
//   sender: username,
//   message: message,
//   time: new Date(Date.now()).getHours() + ':' + new Date(Date.now()).getMinutes()
// }}


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