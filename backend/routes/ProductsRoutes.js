const express = require('express')
const { getProducts, postProducts, updateProduct, deleteProduct } = require('../controllers/ProductsController')
const router  = express.Router()

router.get('/' , getProducts)
router.post('/' , postProducts) 
router.put('/:id' , updateProduct)
router.delete('/:id' , deleteProduct)



module.exports = router