import { useState, useEffect } from "react";
import axios from 'axios'
import UsernameUpdate from "./UserUpdate";
import ChatNameUpdate from "./ChatNameUpdate";

const randomWords = require('random-words')

const BASE_URL = 'https://polar-taiga-21134.herokuapp.com'

const ChatPage = () => {
const [message, setMessage] = useState('')
const [msgs, setMsgs] = useState([])
const [users, setUsers] = useState([])
const [chats, setChats] = useState([])
const [profileImg, setProfileImg] = useState([])
const [update, setUpdate] = useState('')
const [modification, setModification] = useState('')
const [modificationId, setModificationId] = useState('')
const [response, setResponse] = useState('')

  const handleChange = (event) => {
    setMessage( event.target.value );
  };

    const botResponse = async () => {
      let wordsArr = randomWords({ min: 2, max: 15 })
      let sentence = wordsArr.join(' ')
      setResponse(sentence)
      await axios.post(`${BASE_URL}/messages`, {body: sentence, sender: 'sender-bot'})
    }

  const sendMessage = async (event) => {
    event.preventDefault()
    if (message !== '') {
      let res = await axios.post(`${BASE_URL}/messages`, {body: message, sender: 'sender-user'})
      console.log(res)
      setMessage('')
      setUpdate(Math.random())
      botResponse()
    }
  }

    const changeModification = (event) => {
    setModification( event.target.value )
  }

  const submitModificaiton = async (event) => {
    event.preventDefault()
    if (modificationId == '') {
      let res = await axios.put(`${BASE_URL}/messages`, {body: modification})
      console.log(res)
      setModification('')
    } else {
      let res = await axios.put(`${BASE_URL}/messages/${modificationId}`, {
      body: modification})
    }
  }

    const changeModificationId = (event) => {
    setModificationId( event.target.value )
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

      useEffect(() => {
        const displayChat = async(req, res) => {
          let currentChat = await axios.get(`${BASE_URL}/chats`)
          let recentChatIndex = currentChat.data.length - 1
          setChats(currentChat.data[recentChatIndex].name)
        }
        displayChat()
      }, [])
  
  
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
          ●
          <div className="chat-header-name">{chats}</div>
        </div>
        <div className="chat-body">
          { msgs ? msgs.map((msg) => (
            <div>
            <div className={msg.sender}>{msg.body}</div>
            <div className="msg-id">{msg._id}</div>
            </div>
          )) : '' }
        </div>
        <div className="chat-footer">
        <form>
          <input id="body" type="text" placeholder="Message" onChange={handleChange} onSubmit={sendMessage} value={message}/>
          <button type="submit" onClick={sendMessage}>send</button>
        </form>
        <form>
          <input id="message-id" type="text" placeholder="Message ID" onChange={changeModificationId} value={modificationId}/>
          <input id="message-edit" type="text" placeholder="Edit Messages" onChange={changeModification} onSubmit={submitModificaiton} value={modification}/>
          <button type="submit" onClick={submitModificaiton}>submit</button>
        </form>
          <button onClick={clearMessages}>Clear Chat</button>
      <UsernameUpdate className="username-update"/>
      <ChatNameUpdate className="chat-name-update"/>
      </div>
    </div>
  )
}

export default ChatPage