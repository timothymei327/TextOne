import './App.css'
import { Routes, Route } from 'react-router-dom'
import UserForm from './components/UserForm'
import ChatForm from './components/ChatForm'
import ChatPage from './components/ChatPage'

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<UserForm />}></Route>
          <Route path="/chat-form" element={<ChatForm />}></Route>
          <Route path="/chat-page" element={<ChatPage />}></Route>
        </Routes>
      </main>
    </div>
  )
}

export default App
