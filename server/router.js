const express = require("express");
const router = express.Router();
const controller = require("./controllers/controller");

router.get("/", controller.home);
router.post("/add-items", controller.addItem)

module.exports = router;