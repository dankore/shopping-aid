"use strict";
const Item = require("../models/model");
const { sortItems, reverse, sortStrings } = require("../helpers/sortItems");
const uniqId = require("../helpers/uniqId");

exports.home = async (req, res) => {
  try {
    const items = await Item.getAll();
    const categorized = sortItems(items);
    const lists = await Item.fetchSelectedItems();
    const stats = await Item.getStats();

    res.render("home", {
      stats: stats[0].numShoppingListCreated,
      lists: reverse(sortStrings(lists)),
      fruits: categorized.fruits,
      veg: categorized.veg,
      cond: categorized.cond,
      frozen: categorized.frozen,
      meat: categorized.meat,
      fresh: categorized.fresh,
      kids: categorized.kids,
      others: categorized.others,
      health: categorized.health,
      electronics: categorized.electronics,
      grains: categorized.grains,
      dairy: categorized.dairy,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.saveShoppingList = (req, res) => {
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

exports.addEachItemToCategory = (req, res) => {
  const item = new Item(req.body);

  item.saveAnItemToEachCategory().then((response) => {
    res.json(response);
  });
};

exports.deleteItemFromCategory = (req, res) => {
  Item.removeItemFromACategory(req.body)
    .then(() => {
      res.json("Success");
    })
    .catch((err) => {
      res.json(err);
    });
};

exports.deleteEntireShoppingList = (req, res) => {
  Item.deleteList(req.body.id)
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.deleteShoppingListItem = (req, res) => {
  try {
    Item.deleteListItem(req.body);
    res.json("Success!");
  } catch (error) {
    console.log(error);
  }
};
