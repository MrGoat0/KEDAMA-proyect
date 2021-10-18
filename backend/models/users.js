const mongoose = require("mongoose");

const users = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  state: { type: Boolean, required: true },
  role: { type: String },
});

module.exports = mongoose.model("users", users);
