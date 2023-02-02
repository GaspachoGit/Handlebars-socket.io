const { Router } = require("express");
const realTimeProds = Router();
const prodManag = require("../../productManager");



realTimeProds.get("/", async (req, res) => {
  res.render("realTimeProducts.handlebars", { msg: "test" });

});

module.exports = {
  realTimeProds,
};
