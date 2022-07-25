const express = require('express')
const cors = require('cors')
const http = require('http')
const { Server } = require('socket.io')

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

server.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})

app.get('/', (req, res) => {
  res.send("You're a wizard, Harry!")
})
