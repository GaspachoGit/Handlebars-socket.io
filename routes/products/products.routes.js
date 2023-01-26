const {Router} = require('express')
const allProds = Router()
const prodManag = require ('../../productManager')
const handlebars = require('express-handlebars')




const products = new prodManag()


allProds.get('/', async (req, res)=>{
  const {limit} = req.query
  let absLimit= Math.abs(limit) 
  let allProd = await products.getProducts()
  let limitedProds = allProd.slice(0, absLimit)
  if (absLimit) {
    if (absLimit>allProd.length) {
      return res.send(`<h1>El límite establecido es mayor a la cantidad de productos existentes</h1>`)
    }
    return res.send(limitedProds)
  }
  const usser = {
    name: 'Tongas',
    country: 'Arg'
  }
/*   res.send(allProd) */
  res.render('index', allProd[1])
})

module.exports = {
  allProds
}