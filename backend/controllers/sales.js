const Sales = require("../models/sales")

// Get all sales
exports.getSales = (req, res) => {
    Sales.find().then((postResults)=>{
        res.status(200).json(postResults);
    })
}
// Create a new sale
exports.addSale = (req, res) => {
    const SaleAdd= new Sales({
        productInfo: req.body.productInfo,
        quantity: req.body.quantity,
        total: req.body.total,
        date: { type: String, required: true }, // como hago on este tipo de dato?
        clientName: req.body.clientName,
        clientId: req.body.clientId,
        seller: req.body.seller,
    });
     
      SaleAdd.save().then((createdProduct) => {
        console.log(createdProduct);
        res.status(201).json("Creado satisfactoriamente");
      });
}

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

// Get Sales by date
exports.getSalesByProps = (req, res) => {
    if(req.body.date)
    Sales.find({date: req.body.date}).then((saleFound)=>{
        res.status(200).json(saleFound)
    })
    .catch((err) => {
        res.status(404).json({ error: err });
      });
};

// Update a product by id
/*
exports.updateProduct = (req, res) => {
    Products.updateOne({ _id: req.params.id }, req.body)
      .then((updateResult) => {
        res.status(200).json(updateResult);
      })
      .catch((err) => {
        res.status(500).json({ error: err });
      });
  };
  */
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