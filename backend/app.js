var express = require("express");
var app = express();

const productsRoutes = require("./router/products");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//link de prueba
app.use("/api/products", productsRoutes);

module.exports = app;