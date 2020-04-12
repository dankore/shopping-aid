const Item = require("../models/model");
const { sortItems } = require("../helpers/sortItems");
const { reverseIt } = require("../helpers/sortItems");
const uniqId = require("../helpers/uniqId");

exports.home = async (req, res) => {
  try {
    const items = await Item.getAll();
    const sorted = sortItems(items);
    const lists = await Item.fetchSelectedItems();

    res.render("home", {
      fruits: sorted[0],
      veg: sorted[1],
      lists: reverseIt(lists),
    });
  } catch (error) {
    console.log(error);
  }
};

exports.addItem = (req, res) => {
  // PROVIDE UNIQ ID IF NONE IS PROVIDED BY A USER
  if (!req.body.title) {
    req.body.title = uniqId();
  }
  Item.saveSelectedItems(req.body);
};

exports.addNewItem = (req, res) => {
  const item = new Item(req.body);
  item.addItem().then((response) => {
    res.json(response);
  });
};

exports.deleteItem = (req, res) => {
  Item.delete(req.body)
    .then(() => {
      res.json("Success");
    })
    .catch((err) => {
      res.json(err);
    });
};

exports.deleteShoppingList = (req, res) => {
  try {
    Item.deleteList(req.body.id);
    res.json("Success!");
  } catch (error) {
    console.log(error);
  }
};
