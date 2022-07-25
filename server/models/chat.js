const { Schema } = require('mongoose')

const chatSchema = new Schema(
  {
    name: { type: String }
    //users: reference object ID (user)
  },
  { timestamps: true }
)

module.exports = chatSchema
