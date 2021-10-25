const express = require("express");
const router = express.Router();

const salesController = require("../controllers/sales");

// endpoints
router.post("/", salesController.addSale);
router.get("/app", salesController.getSales);
router.get("/filterID/:id", salesController.getSaleById);
router.put("/:id", salesController.updateSale);
router.get("/filter/:id", salesController.getSaleById);


module.exports = router;
