const express = require('express')
const { getUsers, addUser,loginUser, updateUser, deleteUser } = require('../controllers/userController')

const router  = express.Router()




router.get('/' , getUsers)
router.post('/' , addUser)
router.post('/login' , loginUser)
router.put('/:id' , updateUser)
router.delete('/:id' , deleteUser)

module.exports = router