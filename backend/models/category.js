const mongoose = require("mongoose");

const category = mongoose.Schema({
  code: { type: String, required: true },
  name: { type: String, required: true },
});

module.exports = mongoose.model("Categoria", category);