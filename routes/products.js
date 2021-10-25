const express = require("express");
const router = express.Router();

const productsController = require("../controllers/products");

// endpoints
router.post("/", productsController.createProduct);
router.get("/filter/:search", productsController.filterProducts);
router.get("/slice/:page", productsController.sliceProducts);
router.get("/all", productsController.getProducts);
router.get("/info", productsController.infoProducts);
router.get("/:id", productsController.getByMongoId);
router.put("/:id", productsController.updateProduct);
router.delete("/:id", productsController.deleteProduct);

module.exports = router;
