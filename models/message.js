const { Schema, default: mongoose } = require('mongoose')

const messageSchema = new Schema(
  {
    body: { type: String, required: true },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    chat: { type: mongoose.Schema.Types.ObjectId, ref: 'Chat' }
  },
  { timestamps: true }
)

module.exports = messageSchema
