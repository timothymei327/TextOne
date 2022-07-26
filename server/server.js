const db = require('./db')
const express = require('express')
const cors = require('cors')
const routes = require('./routes')
const http = require('http')
const { Server } = require('socket.io')
const { User } = require('./models')

const PORT = process.env.PORT || 3001
const app = express()
const server = http.createServer(app)
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

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

app.post('/users', async (req, res) => {
  console.log(req.body)
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

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})
