const { Schema } = require('mongoose')

const userSchema = new Schema(
  {
    username: { type: String, required: true },
    image: { type: String }
  },
  { timestamps: true }
)

module.exports = userSchema
