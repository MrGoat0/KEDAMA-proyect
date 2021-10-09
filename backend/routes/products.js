const express = require("express");
const router = express.Router();

const productsController = require("../controllers/products");

// endpoints
router.post("/", productsController.createProduct);
router.get("/all", productsController.getProducts);
router.get("/:id", productsController.getProductId);
router.put("/:id", productsController.updateProduct);
router.delete("/:id", productsController.deleteProduct);

module.exports = router;
