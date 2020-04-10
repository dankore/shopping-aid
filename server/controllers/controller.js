const Item = require("../models/model");
const sortItems = require("../helpers/sortItems").sortItems;

exports.home = async (req, res) => {
  let items = await Item.getAll();
  let sorted = sortItems(items);

  res.render("home", { all: sorted[2] });
};

exports.addItem = (req, res) => {
  console.log(req.body.items);
};

exports.addNewItem = (req, res) => {
  let item = new Item(req.body);
  item.addItem().then((response) => {
    res.json(response);
    console.log(response);
  });
};
