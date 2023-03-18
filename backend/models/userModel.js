const mongoose  = require('mongoose')
const bcrypt = require('bcrypt')
const userSchema = mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true , unique : true    },
    password: { type: String, required: true ,  hash_password: {
        type: String
      }, },
     
})

module.exports  =  mongoose.model('User' , userSchema)