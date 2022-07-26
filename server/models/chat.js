const { Schema, default: mongoose } = require('mongoose')

const chatSchema = new Schema(
  {
    name: { type: String },
    userA: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    userB: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
  },
  { timestamps: true }
)

module.exports = chatSchema
