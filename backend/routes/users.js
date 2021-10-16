const express = require("express");
const router = express.Router();

const usersController = require("../controllers/users");
const auth = require("../middlewares/auth");

// endpoints
router.get("/:email", auth, usersController.authUser);
// router.post("/", usersController.createUser);
// router.get("/:id", usersController.getUserId);
// router.put("/:id", usersController.updateUser);
// router.delete("/:id", usersController.deleteUser);

module.exports = router;
