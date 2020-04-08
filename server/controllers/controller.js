const Item = require("../models/model");

exports.home = (req, res) => {
  res.render("home");
};

exports.addItem = (req, res) => {
  console.log(req.body.items);
};

exports.addNewItem = (req, res) => {
  console.log(req.body.item);
  console.log(req.body.categories);
};


