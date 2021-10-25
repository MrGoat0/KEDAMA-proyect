const Sales = require("../models/sales");

// Get all sales
exports.getSales = (req, res) => {
  Sales.find()
    .populate("productInfo")
    .then((postResults) => {
      res.status(200).json(postResults);
    }).catch((err) => {
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
    res.status(201).json(createdProduct._id);
  });
};

// Get a Sale by id
exports.getSaleById = (req, res) => {
  Sales.findById(req.params.id).populate("productInfo")
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
  
  if (req.body.date !== null) {
    Sales.find({ date: req.body.date })
      .then((saleFound) => {
        res.status(200).json(saleFound);
      })
      .catch((err) => {
        res.status(404).json({ error: err });
      });
  // } else if (req.body.clientName !== null) {
  //   Sales.find({ clientName: req.body.clientName })
  //     .then((saleFound) => {
  //       res.status(200).json(saleFound);
  //     })
  //     .catch((err) => {
  //       res.status(404).json({ error: err });
  //     });
  // } else if (req.body.productInfo !== null) {
  //   Sales.find({ productInfo: req.body.productInfo })
  //     .then((saleFound) => {
  //       res.status(200).json(saleFound);
  //     })
  //     .catch((err) => {
  //       res.status(404).json({ error: err });
  //     });
  // } else if(req.body.seller !== null){
  //   Sales.find({ seller: req.body.seller })
  //     .then((saleFound) => {
  //       res.status(200).json(saleFound);
  //     })
  //     .catch((err) => {
  //       res.status(404).json({ error: err });
  //     });
  }else{
    res.status(404).json(undefined);
  }
};

// Update a sale by id
exports.updateSale = (req, res) => {
  Sales.updateOne({ _id: req.params.id }, req.body)
    .then((updateResult) => {
      res.status(200).json(updateResult);
    })
    .catch((err) => {
      console.log("entro a else")
      res.status(500).json({ error: err });
    });
};

