const express = require("express");
const router = express.Router();
const controller = require("./controllers/controller");
const login = require("../server/middlewares/auth");

router.get("/", controller.home);
router.post("/add-items", controller.saveShoppingList);
router.post("/add-new-item", controller.addEachItemToCategory);
router.post("/delete-item", controller.deleteItemFromCategory);
router.post(
  "/delete-shopping-list",
  controller.verifyPasswordBeforeDeletingList,
  controller.deleteEntireShoppingList
);
router.post("/delete-a-shopping-list-item", controller.deleteShoppingListItem);
router.post("/protect-with-password", controller.saveShoppingList);
router.post(
  "/unlock-shopping-list",
  controller.verifyPasswordBeforeDeletingList,
  controller.unlockShoppingList
);
module.exports = router;
