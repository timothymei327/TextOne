const { Schema, default: mongoose } = require('mongoose')

const chatSchema = new Schema(
  {
    name: { type: String }
  },
  { timestamps: true }
)

module.exports = chatSchema
