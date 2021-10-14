const express = require("express");
const router = express.Router();

const CategoryController = require("../controllers/category");

router.post("", CategoryController.CreateCategory);
router.get("", CategoryController.GetallCategories);
module.exports = router;