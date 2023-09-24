const express = require("express");
const UserController = require("../controllers/user");

const router = express.Router();

router.get("/", UserController.getusers);
router.post("/create-user", UserController.createUsers);
router.put("/:id", UserController.editUsers);
router.delete("/:id", UserController.deleteUserById);

module.exports = router;
