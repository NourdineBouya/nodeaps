const Products = require('../models/ProductsModel')
const asyncHandler = require('express-async-handler')



// APi Get methode
// route '/api/products'/
const getProducts = asyncHandler(async (req, res) => {
    const products = await Products.find()
  
    res.status(200).json(products)
  })
   // APi Get methode
   // route '/api/products'/
const postProducts = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
      }
    
      const produit = await Products.create({
        text: req.body.text,
         
      })
    
      res.status(200).json(produit)
  })

module.exports = {
    getProducts,
    postProducts
}