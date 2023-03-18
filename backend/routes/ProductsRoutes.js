const express = require('express')
const { getProducts, postProducts } = require('../controllers/ProductsController')
const router  = express.Router()

router.get('/' , getProducts)

router.post('/', postProducts)
router.put('/:id' , (req, res) =>{
    res.send(`ici on update ${req.params.id}`)
})
router.delete('/:id' , (req, res) =>{
    res.send('All products AS delete')
})
module.exports = router