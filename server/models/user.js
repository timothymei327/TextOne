const { Schema } = require('mongoose')

const userSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    username: { type: String, required: true },
    image: { type: String }
  },
  { timestamps: true }
)

module.exports = userSchema
