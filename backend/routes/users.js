const express = require("express");
const router = express.Router();

const usersController = require("../controllers/users");
const auth = require("../middlewares/auth");
const roleAuth = require("../middlewares/roleAuth");

// endpoints
router.get("/", auth, usersController.authUser);
router.get("/roles", auth, roleAuth, usersController.authRole);
// router.post("/", usersController.createUser);
// router.get("/:id", usersController.getUserId);
// router.put("/:id", usersController.updateUser);
// router.delete("/:id", usersController.deleteUser);

module.exports = router;
