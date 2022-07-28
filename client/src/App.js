import './App.css'
import { Routes, Route } from 'react-router-dom'
import UserForm from './components/UserForm'
import ChatForm from './components/ChatForm'
import ChatPage from './components/ChatPage'
import { io } from 'socket.io-client'

function App() {
  const socket = io.connect('/')

  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<UserForm />}></Route>
          {/* <Route path="/user-form" element={<UserForm />}></Route> */}
          <Route
            path="/chat-form"
            element={<ChatForm socket={socket} />}
          ></Route>
          <Route
            path="/chat-page"
            element={<ChatPage socket={socket} />}
          ></Route>
        </Routes>
      </main>
    </div>
  )
}

export default App
