const express = require("express");
const router = express.Router();

const CategoryController = require("../controllers/category");

// router.get("", CategoryController.getProducts);
router.post("", CategoryController.CreateCategory);
// router.get("/disponible", CategoryController.getProductAvailable);
// router.get("/:id", CategoryController.getProductId);



module.exports = router;