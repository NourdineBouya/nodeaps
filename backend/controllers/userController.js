const User = require('../models/userModel')
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// Get Users
const getUsers = asyncHandler(async (req, res) => {
    const user = await User.find()
  
    res.status(200).json(user)
  })


  // add user
  const addUser = asyncHandler(async (req, res) => {
    const  {username ,email , password } = req.body
     
    const userExiste = await User.findOne({email})
    if(userExiste)
    {
      res.status(400)
      throw new Error ('User Already exist')
    }
    const user = await User.create({ 
      username,
      email,
      password
     }) 
    if(user) {
      res.status(200).json({
        _id: user.id,
        username : user.username,
        email : user.email,
      })
    }else {
      res.status(400)
      throw new Error ('User Not created')
    }
  })

  // Login Users
  const loginUser = asyncHandler(async (req, res) => {
      const {email , password} = req.body
      const user = await User.findOne({ email: email, password: password })
      if(user)
      {
        res.status(200).json(user)
      }
  })
  // Update Request
  const updateUser = asyncHandler(async (req, res) => {
     const user = await User.findOne(req.params.id)
     if(!user)
     {
      res.status(404).json({message: 'User not found'})
     }
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body)
    res.json(updatedUser)
  })

  // Delete Request
  const deleteUser = asyncHandler(async (req, res) => {
     const user = await User.findOne(req.params.id)
     if(!user)
     {
      res.status(404).json({message: 'User not found'})
     }
    const deleteUser = await User.findByIdAndDelete(req.params.id, req.body)
    res.json(deleteUser)
  })

  module.exports = {
    getUsers,
    addUser,
    updateUser,
    deleteUser,
    loginUser
  }