// const db = require('../db')
// const { User, Chat, Message } = require('../models')

// db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// const main = () => {
//   const userA = new User({
//     firstName: 'user',
//     lastName: 'AAA',
//     email: 'userAAA@gmail.com',
//     username: 'userAAA123',
//     image: 'https://i.imgur.com/tkqu13V.jpg'
//   })
//   userA.save()

//   const userB = new User({
//     firstName: 'user',
//     lastName: 'BBB',
//     email: 'userBBB@gmail.com',
//     username: 'userBBB123',
//     image: 'https://i.imgur.com/Hw68pYB.jpg'
//   })
//   userB.save()

//   const chat = new Chat({
//     name: 'chatForUserAandUserB',
//     userA: userA._id,
//     userB: userB._id
//   })
//   chat.save()

//   const message = new Message({
//     body: 'hello this is the first ever message',
//     owner: userA._id,
//     chat: chat._id
//   })
//   message.save()

//   console.log('created 2 users and chat with one message')
// }

// const run = () => {
//   main()
//   db.close()
// }
// run()
