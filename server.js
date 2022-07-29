const db = require('./db')
const express = require('express')
const app = express()
const cors = require('cors')
const routes = require('./routes')
const { User, Chat, Message } = require('./models')

const PORT = process.env.PORT || 3001
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(`${__dirname}/client/build`))

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

app.get('/messages', async (req, res) => {
  const messages = await Message.find({})
  res.json(messages)
})

app.post('/users', async (req, res) => {
  // console.log(req.body)
  let newUser = await User.create(req.body)
  res.json(newUser)
})

app.post('/messages', async (req, res) => {
  // console.log(req.body)
  let newMsg = await Message.create(req.body)
  res.json(newMsg)
})

app.put('/users', async (req, res) => {
  let modifyUser = await User.updateMany({}, req.body)
  res.json(modifyUser)
})

app.put('/messages', async (req, res) => {
  let modifyMessage = await Message.updateMany({}, req.body)
  res.json(modifyMessage)
})

app.put('/messages/:id', async (req, res) => {
  let modifyMessage = await Message.findByIdAndUpdate(req.body)
  console.log(req.body)
  res.json(modifyMessage)
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

app.delete('/messages', async (req, res) => {
  let deleteMessages = await Message.deleteMany()
  res.json(deleteMessages)
})

app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`)
})

app.listen(PORT, () => {
  console.log(`socket io server listening on port ${PORT}`)
})
