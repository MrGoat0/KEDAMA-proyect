const express = require("express");
const router = express.Router();

const salesController = require("../controllers/sales");

// endpoints
router.post("/", salesController.addSale);
router.get("/app", salesController.getSales);
router.get("/props", salesController.getSalesByProps);
router.get("/entire/:id", salesController.getSaleIdLazyLoading);
router.get("/:id", salesController.getSaleId);
router.put("/:id", salesController.updateSale);

// router.put("/:id", salesController.updateSale);
// router.delete("/:id", salesController.deleteSale);

module.exports = router;
