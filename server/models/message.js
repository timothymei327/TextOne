const { Schema } = require('mongoose')

const messageSchema = new Schema(
  {
    body: { type: Text, required: true }
    // owner: reference Object ID (user)
    //chat: reference ID (chat)
  },
  { timestamps: true }
)

module.exports = messageSchema
