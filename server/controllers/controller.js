const Item = require("../models/model");

exports.home = (req, res) => {
  res.render("home");
};

exports.addItem = (req, res) => {
  console.log(req.body.items);
};

exports.addNewItem = (req, res) => {
  
  let item = new Item(req.body);
  item.addItem();
};


