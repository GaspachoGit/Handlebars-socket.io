const {Router} = require('express')
const addProds = Router()
const prodManag = require ('../../productManager')



const products = new prodManag()

addProds.post('/', async(req,res)=>{
  const infoProd = req.body 
  products.addProducts(infoProd)
  res.json({msg: 'producto añadido'}) 
/*   const allProds = await products.getProducts()
  io.emit('new_product', 'allProds'); */
})

module.exports = {
  addProds
}