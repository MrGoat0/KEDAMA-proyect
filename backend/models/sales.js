const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const sales = mongoose.Schema({
  state: { type: String, required: true },
  productInfo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "products",
    required: true,
  },
  quantity: { type: Number, required: true },
  total: { type: Number, required: true },
  date: { type: String, required: true },
  clientName: { type: String, required: true },
  clientId: { type: Number, required: true },
  seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
});


module.exports = mongoose.model("sales", sales);

