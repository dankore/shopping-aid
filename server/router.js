const express = require("express");
const router = express.Router();
const controller = require("./controllers/controller");
const login = require("../server/middlewares/auth");


router.get("/", controller.home);
router.post("/add-items", controller.addItem);
router.post("/add-new-item", controller.addNewItem);
router.post("/delete-item", controller.deleteItem);
router.post("/delete-shopping-list", controller.deleteShoppingList);
router.post("/delete-a-shopping-list-item", controller.deleteShoppingListItem)

module.exports = router;
