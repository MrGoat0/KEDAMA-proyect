const express = require("express");
const router = express.Router();

const ProductController = require("../controllers/product");

router.get("", ProductController.getProducts);
router.post("", ProductController.addProducts);
router.get("/disponible", ProductController.getProductAvailable);
router.get("/:id", ProductController.getProductId);


module.exports = router;