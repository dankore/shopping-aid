const Item = require("../models/model");
const helper = require("../helpers/sortItems");
const uniqId = require("../helpers/uniqId");

exports.home = async (req, res) => {
  try {
    const items = await Item.getAll();
    const categorized = helper.sortItems(items);
    const lists = await Item.fetchSelectedItems();

    res.render("home", {
      lists: helper.reverse(helper.sortStrings(lists)),
      fruits: categorized.fruits,
      veg: categorized.veg,
      cond: categorized.cond,
      frozen: categorized.frozen,
      meat: categorized.meat,
      fresh: categorized.fresh,
      kids: categorized.kids,
      others: categorized.others,
      health: categorized.health
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

  Item.saveSelectedItems(req.body)
    .then((response) => {
      res.json(response);
    })
    .catch((error) => {
      res.json(error);
    });
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

exports.deleteShoppingListItem = (req, res) => {
  try {
    Item.deleteListItem(req.body);
    res.json("Success!");
  } catch (error) {
    console.log(error);
  }
};
