const express = require("express");
const router = express.Router();
const controller = require("./controllers/controller");
const login = require("../server/middlewares/auth");


router.get("/", controller.home);
router.post("/add-items", controller.saveShoppingList);
router.post("/add-new-item", controller.addEachItemToCategory);
router.post("/delete-item", controller.deleteItemFromCategory);
router.post("/delete-shopping-list", controller.deleteEntireShoppingList);
router.post("/delete-a-shopping-list-item", controller.deleteShoppingListItem)

module.exports = router;
