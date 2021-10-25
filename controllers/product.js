const Producto = require("../models/products");
exports.getProducts = (req, res) => {
  Producto.find().then((productoResult) => {
    return res.status(200).json(productoResult);
  });
};

exports.getProductId = (req, res) => {
  Producto.findById(req.params.id).then((productoResult) => {
    if (productoResult) {
      res.status(200).json(productoResult);
    } else {
      res.status(404).json("Producto no encontrado");
    }
  });
};

exports.getProductAvailable = (req, res) => {
  Producto.find({ available: false }).then((productoResult) => {
    res.status(200).json(productoResult);
  });
};
