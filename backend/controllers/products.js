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
    .sort({ id: 1 })
    .then((productResult) => {
      res.status(200).json(productResult);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};

// Get number of products and maxId
exports.infoProducts = (req, res) => {
  Products.find()
    .then((infoResult) => {
      res.status(200).json({
        count: infoResult.length,
        maxId: infoResult.sort((a, b) => a.id - b.id).splice(-1)[0].id,
      });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};

// Get slice of records according to the page
exports.sliceProducts = (req, res) => {
  const showFrom = 40 * (req.params.page - 1);

  Products.find()
    .skip(showFrom)
    .limit(40)
    .sort({ id: 1 })
    .then((sliceResult) => {
      res.status(200).json(sliceResult);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};

// Get a product by id or description
exports.filterProducts = (req, res) => {
  const filterId = /^[0-9]+$/i.test(req.params.search)
    ? parseInt(req.params.search)
    : 0;

  let filterDesc = req.params.search
    .split(/\s+/)
    .map((kw) => '"' + kw + '"')
    .join(" ");

  Products.find({
    $or: [{ id: { $eq: filterId } }, { $text: { $search: filterDesc } }],
  })
    .sort({ id: 1 })
    .then((filterResult) => {
      res.status(200).json(filterResult);
    })
    .catch((err) => {
      res.status(404).json("ERROR");
    });
};

// get by _id
// Get all products
exports.getByMongoId = (req, res) => {
  Products.find({ _id: req.params.id })
    .then((searchResult) => {
      res.status(200).json(searchResult);
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

// Delete a product by id
exports.deleteProduct = async (req, res) => {
  Products.deleteOne({ _id: req.params.id })
    .then((deleteResult) => {
      res.status(200).json(deleteResult);
    })
    .catch((err) => {
      res.status(404).json({ error: err });
    });
};
