// imports and app instance
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");

const salesRoutes = require("./routes/sales");
const productsRoutes = require("./routes/products");
// const usersRoutes = require("./routes/users");

// middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

// connection to database
const connectionString =
  "mongodb+srv://mateo-cr:V5I8toOBGEoutZ2a@mongodb-session.rct8e.mongodb.net/kedama-project?retryWrites=true&w=majority";
mongoose.connect(connectionString).then(() => {
  console.log("Connected to MongoDB!");
});

// define api routes
app.use("/api/sales", salesRoutes);
app.use("/api/products", productsRoutes);
// app.use("/api/users", usersRoutes);

module.exports = app;
