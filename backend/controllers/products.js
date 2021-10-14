const Products = require("../models/products");

// Create a new product
exports.createProduct = (req, res) => {
  const product = new Products(req.body);

  product
    .save()
    .then((createdProduct) => {
      res.status(201).json(createdProduct);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};

// Get all products
exports.getProducts = (req, res) => {
  Products.find()
    .then((productResult) => {
      res.status(200).json(productResult);
    })
    .catch((err) => {
      res.json({ error: err });
    });
};

// Get a product by id
exports.getProductId = (req, res) => {
  Products.findById(req.params.id)
    .then((getIdResult) => {
      res.status(200).json(getIdResult);
    })
    .catch((err) => {
      res.status(404).json({ error: err });
    });
};

// Update a product by id
exports.updateProduct = (req, res) => {
  Products.updateOne({ _id: req.params.id }, req.body)
    .then((updateResult) => {
      res.status(200).json(updateResult);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};

// Delete a user by id
exports.deleteProduct = async (req, res) => {
  Products.deleteOne({ _id: req.params.id })
    .then((updateResult) => {
      res.status(200).json(updateResult);
    })
    .catch((err) => {
      res.status(404).json({ error: err });
    });
};
