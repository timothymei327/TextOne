const db = require('./db')
const express = require('express')
const app = express()
const cors = require('cors')
const routes = require('./routes')

const { Server } = require('socket.io')
const { User, Chat } = require('./models')

const PORT = process.env.PORT || 3001
const server = require('http').Server(app)
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(`${__dirname}/client/build`))

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
  }
})

io.on('connection', (socket) => {
  console.log(`User connected: ${socket.id}`)

  socket.on('send_message', (data) => {
    socket.broadcast.emit('receive_message', data)
    // socket.to(data.room).emit('receive_message', data)
  })

  // socket.on('join_room', (data) => {
  //   socket.join(data)
  //   console.log(`User: ${socket.id} entered chat room: ${data}`)
  // })

  socket.on('disconnect', () => {
    console.log(`User Disconnected: ${socket.id}`)
  })
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

app.post('/users', async (req, res) => {
  // console.log(req.body)
  let newUser = await User.create(req.body)
  res.json(newUser)
})

app.put('/users', async (req, res) => {
  let modifyUser = await User.updateMany({}, req.body)
  res.json(modifyUser)
})

app.delete('/users', async (req, res) => {
  let deleteUsers = await User.deleteMany()
  res.json(deleteUsers)
})

app.get('/chats', async (req, res) => {
  const chats = await Chat.find({})
  res.json(chats)
})

app.post('/chats', async (req, res) => {
  // console.log(req.body)
  let newChat = await Chat.create(req.body)
  res.json(newChat)
})

app.put('/chats', async (req, res) => {
  let modifyChat = await Chat.updateMany({}, req.body)
  res.json(modifyChat)
})

app.delete('/chats', async (req, res) => {
  let deleteChats = await Chat.deleteMany()
  res.json(deleteChats)
})

app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`)
})

server.listen(PORT, () => {
  console.log(`socket io server listening on port ${PORT}`)
})
