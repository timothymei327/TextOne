// const User = require('../models/user')

// const createUser = async (req, res) => {
//   try {
//     const user = await new User(req.body)
//     await user.save()
//     return res.status(201).json({
//       user
//     })
//   } catch (error) {
//     return res.status(500).json({ error: error.message })
//   }
// }

// module.exports = {
//   createUser
// }