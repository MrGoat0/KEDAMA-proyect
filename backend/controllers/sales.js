const Sales = require("../models/sales");

// Get all sales
exports.getSales = (req, res) => {
  Sales.find()
    .populate("productInfo")
    .then((postResults) => {
      res.status(200).json(postResults);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};
// Create a new sale
exports.addSale = (req, res) => {
  const SaleAdd = new Sales({
    productInfo: req.body.productInfo,
    quantity: req.body.quantity,
    total: req.body.total,
    date: req.body.date, // como hago on este tipo de dato?
    clientName: req.body.clientName,
    clientId: req.body.clientId,
    seller: req.body.seller,
  });
  SaleAdd.save().then((createdProduct) => {
    res.status(201).json("Creado satisfactoriamente");
  });
};

// Get a Sale by id
exports.getSaleId = (req, res) => {
  Sales.findById(req.params.id)
    .then((getIdResult) => {
      res.status(200).json(getIdResult);
    })
    .catch((err) => {
      res.status(404).json({ error: err });
    });
};
//get a Sale by Lazy loadings

exports.getSaleIdLazyLoading = (req, res) => {
  Sales.findById(req.params.id)
    .populate("productInfo") //falta incorporar la información del seller
    .then((getIdResult) => {
      res.status(200).json(getIdResult);
    })
    .catch((err) => {
      res.status(404).json({ error: err });
    });
};

// Get Sales by other props
exports.getSalesByProps = (req, res) => {
  //meter campo de estado en listado y registro
  if (
    req.body.state != null &&
    req.body.date != null &&
    req.body.clientName != null &&
    req.body.productInfo != null
  ) {
    Sales.find({
      state: req.body.state,
      date: req.body.date,
      productInfo: req.body.productInfo,
      clientName: req.body.clientName,
    })
      .then((saleFound) => {
        res.status(200).json(saleFound);
      })
      .catch((err) => {
        res.status(404).json({ error: err });
      });
  } else if (req.body.state != null) {
    Sales.find({ state: req.body.state })
      .then((saleFound) => {
        res.status(200).json(saleFound);
      })
      .catch((err) => {
        res.status(404).json({ error: err });
      });
  } else if (req.body.date != null) {
    Sales.find({ date: req.body.date })
      .then((saleFound) => {
        res.status(200).json(saleFound);
      })
      .catch((err) => {
        res.status(404).json({ error: err });
      });
  } else if (req.body.clientName != null) {
    Sales.find({ clientName: req.body.clientName })
      .then((saleFound) => {
        res.status(200).json(saleFound);
      })
      .catch((err) => {
        res.status(404).json({ error: err });
      });
  } else if (req.body.productInfo != null) {
    Sales.find({ productInfo: req.body.productInfo })
      .then((saleFound) => {
        res.status(200).json(saleFound);
      })
      .catch((err) => {
        res.status(404).json({ error: err });
      });
  }
};

// Update a sale by id
exports.updateSale = (req, res) => {
  Sales.updateOne({ _id: req.params.id }, req.body)
    .then((updateResult) => {
      res.status(200).json(updateResult);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};

/*
  // Delete a product by id
  exports.deleteProduct = async (req, res) => {
    Products.deleteOne({ _id: req.params.id })
      .then((updateResult) => {
        res.status(200).json(updateResult);
      })
      .catch((err) => {
        res.status(404).json({ error: err });
      });
  };
  */
