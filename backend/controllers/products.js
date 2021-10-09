const Products = require("../models/products");

// Create a new product
exports.createProduct = (req, res) => {
  try {
    const product = new Products(req.body);

    product.save().then((createdProduct) => {
      res.status(201).json(createdProduct);
    });
  } catch (err) {
    console.log(err);
    return res.json(err);
  }
};

// Get all products
exports.getProducts = (req, res) => {
  try {
    Products.find().then((productResult) => {
      res.status(200).json(productResult);
    });
  } catch (err) {
    console.log(err);
    return res.json(err);
  }
};

// Get a product by id
exports.getProductId = (req, res) => {
  try {
    Products.findById(req.params.id).then((getIdResult) => {
      if (getIdResult) {
        res.status(200).json(getIdResult);
      } else {
        res.status(404).json({ msg: "¡Producto no encontrado!" });
      }
    });
  } catch (err) {
    console.log(err);
    return res.json(err);
  }
};

// Update a product by id
exports.updateProduct = (req, res) => {
  try {
    Products.updateOne({ _id: req.params.id }, req.body).then(
      (updateResult) => {
        if (updateResult.matchedCount === 1) {
          if (updateResult.modifiedCount == 1) {
            res.status(200).json({ msg: "¡Producto actualizado!" });
          } else {
            res
              .status(200)
              .json({ msg: "¡Los nuevos datos son iguales a los anteriores!" });
          }
        } else {
          res.status(404).json({ msg: "¡Producto no encontrado!" });
        }
      }
    );
  } catch (err) {
    console.log(err);
    return res.json(err);
  }
};

// Delete a user by id
exports.deleteProduct = async (req, res) => {
  try {
    Products.deleteOne({ _id: req.params.id }).then((deleteResult) => {
      if (deleteResult.deletedCount === 1) {
        res.status(200).json({ msg: "¡Producto eliminado!" }); //204
      } else {
        res.status(404).json({ msg: "¡Producto no encontrado!" });
      }
    });
  } catch (err) {
    console.log(err);
    return res.json(err);
  }
};
