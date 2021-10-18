// imports and app instance
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const app = express();

// const salesRoutes = require("./routes/sales");
const productsRoutes = require("./routes/products");
const usersRoutes = require("./routes/users");

// middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

// connection to database
const connectionString =
  "mongodb+srv://mateo-cr:V5I8toOBGEoutZ2a@mongodb-session.rct8e.mongodb.net/kedama-project?retryWrites=true&w=majority";

mongoose.connect(connectionString).then(() => {
  console.log("Connected to MongoDB!");
});

// define api routes
// app.use("/api/sales", salesRoutes);
app.use("/api/products", productsRoutes);
app.use("/api/users", usersRoutes);

module.exports = app;
