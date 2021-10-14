const express = require("express");
const router = express().Router();

const salesController = require("../controllers/sales");

// endpoints
router.post("/", salesController.createSale);
router.get("/all", salesController.getSales);
router.get("/:id", salesController.getSaleId);
router.put("/:id", salesController.updateSale);
router.delete("/:id", salesController.deleteSale);

module.exports = router;
