const express = require('express')
const cors = require('cors')
const http = require('http')
const { Server } = require('socket.io')
const db = require('./db')
const { User } = require('./models')

const PORT = process.env.PORT || 3001
const app = express()
const server = http.createServer(app)
app.use(cors())

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
  }
})

app.get('/', (req, res) => {
  res.send('Your server is running')
})

app.get('/users', async (req, res) => {
  const users = await User.find({})
  res.json(users)
})

app.get('/users/:id', async (req, res) => {
  const { id } = req.params
  const user = await User.findById(id)
  res.json(user)
})

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})
