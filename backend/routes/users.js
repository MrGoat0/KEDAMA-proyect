const express = require("express");
const router = express.Router();

const usersController = require("../controllers/users");

// endpoints
// router.post("/", usersController.createUser);
router.get("/all", usersController.getUsers);
// router.get("/:id", usersController.getUserId);
// router.put("/:id", usersController.updateUser);
// router.delete("/:id", usersController.deleteUser);

module.exports = router;
