import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Users from './components/Users'
import Chat from './components/Chat'

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/users" element={<Users />}></Route>
          <Route path="/chat" element={<Chat />}></Route>
        </Routes>
      </main>
    </div>
  )
}

export default App
