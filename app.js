const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const { Server } = require("socket.io");

const port = 8000;

const { allProds } = require("./routes/products/products.routes");
const { productsById } = require("./routes/products/productsById.routes");
const { addProds } = require("./routes/products/addProds.routes");
const { updateProduct } = require("./routes/products/updateProducts.routes");
const { deleteById } = require("./routes/products/deleteProduct.routes");
const { realTimeProds } = require("./routes/products/realTime.routes");

const { newCart } = require("./routes/carrito/newCart.routes");
const { cartById } = require("./routes/carrito/cartById.routes");
const { addProdToCart } = require("./routes/carrito/addProdToCart.routes");

app.use(express.json());

app.use("/api/products", allProds);
app.use("/api/products", productsById);
app.use("/api/products", addProds);
app.use("/api/products", updateProduct);
app.use("/api/products", deleteById);
app.use("/realtimeproducts", realTimeProds);

app.use("/api/carts", newCart);
app.use("/api/carts", cartById);
app.use("/api/carts", addProdToCart);

app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");
app.use(express.static(__dirname + "/public"));

const httpServer = app.listen(port, () => {
  console.log(`running at port ${port}!!`);
});

const io = new Server(httpServer);

io.on('connection', socket=>{
  console.log(`nuevo cliente conectado con el id ${socket.id}`)
  socket.on('newProduct', data=>{
    console.log(data)
  })
})