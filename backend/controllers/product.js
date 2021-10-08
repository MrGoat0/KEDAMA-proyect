const Producto = require('../models/products')
exports.getProducts = (req, res) => {
  Producto.find()
    .then((productoResult) => {
      return res.status(200).json(productoResult);
    })


};
exports.addProducts = (req, res) => {
  const productoAdd= new Producto({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    url: req.body.url,
    category: req.body.category,
    available: req.body.available,
   
  });
  productoAdd.save().then((resp)=>{console.log(resp)
  res.status(201).json("Creado satisfactoriamente")
  });

 exports.getProductId = (req, res) => {
  Producto.findById(req.params.id).then((productoResult) => {
    if (productoResult) {
      res.status(200).json(productoResult);
    } else {
      res.status(404).json("Producto no encontrado");
    }
  });
};

};