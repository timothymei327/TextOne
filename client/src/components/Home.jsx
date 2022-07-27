import React from 'react'
import Users from './Users'
import UserForm from './UserForm'
import ChatForm from './ChatForm'

function Home() {
  return (
    <div className="home">
      <div>
        <UserForm />
        <ChatForm />
      </div>
    </div>
  )
}

export default Home