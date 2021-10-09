const mongoose = require("mongoose");

const users = mongoose.Schema({
  name: { type: string, required: true },
  state: { type: string, required: true },
  rol: { type: string },
});

module.exports = mongoose.model("users", users);
