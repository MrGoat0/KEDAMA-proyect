const mongoose = require("mongoose");

const sales = mongoose.Schema({
  state: { type: string, required: true },
  total: { type: Number, required: true },
  identifier: { type: String, requiered: true },
  quantity: { type: Number, required: true },
  unitPrice: { type: Number, required: true },
  date: { type: Timestamp, required: true },
  clientName: { type: String, required: true },
  clientId: { type: Number, required: true },
  seller: { type: String, required: true },
});

module.exports = mongoose.model("sales", sales);
