const { Schema, default: mongoose } = require('mongoose')

const messageSchema = new Schema(
  {
    body: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = messageSchema
