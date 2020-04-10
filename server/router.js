const express = require("express");
const router = express.Router();
const controller = require("./controllers/controller");

router.get("/", controller.home);
router.post("/add-items", controller.addItem);
router.post("/add-new-item", controller.addNewItem);
router.post("/delete-item", controller.deleteItem);

module.exports = router;
