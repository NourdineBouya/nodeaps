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
  const  { title, descreption,
    salary,
    company,
    author,
    skils,
    location,
    categories,
    degree,
    contrat,
    fonction}= req.body
    if (!req.body) {
        res.status(400)
        throw new Error('Some of your Filed is empty')
      }
    
      const produit = await Products.create({
         title, descreption,
        salary,
        company,
        author,
        skils,
        location,
        categories,
        degree,
        contrat,
        fonction
         
      })
    
      res.status(200).json(produit)
  })

  // Update Request
  const updateProduct = asyncHandler(async (req, res) => {
    const produit = await Products.findOne(req.params.id)
    if(!produit)
    {
     res.status(404).json({message: 'produit not found'})
    }
   const updateProduct = await Products.findByIdAndUpdate(req.params.id, req.body)
   res.json(updateProduct)
 })

 // Delete Request
 const deleteProduct = asyncHandler(async (req, res) => {
    const user = await Products.findOne(req.params.id)
    if(!user)
    {
     res.status(404).json({message: 'User not found'})
    }
   const deleteProduct = await Products.findByIdAndDelete(req.params.id, req.body)
   res.json(deleteProduct)
 })

module.exports = {
    getProducts,
    postProducts,
    updateProduct,
    deleteProduct

}