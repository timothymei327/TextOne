import React from 'react'
import Users from './Users'
import UserForm from './UserForm'

function Home() {
  return (
    <div className="home">
      <div>
        <UserForm />
        <Users />
      </div>
    </div>
  )
}

export default Home