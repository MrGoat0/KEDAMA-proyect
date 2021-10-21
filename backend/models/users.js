const mongoose = require("mongoose");

const users = mongoose.Schema({
  name: { type: String, required: true },
  state: { type: String, required: true },
  rol: { type: String },
});

module.exports = mongoose.model("users", users);
