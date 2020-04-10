const Item = require("../models/model");
const { sortItems } = require("../helpers/sortItems");

exports.home = async (req, res) => {
  const items = await Item.getAll();
  const sorted = sortItems(items);

  res.render("home", { fruits: sorted[0], veg: sorted[1] });
};

exports.addItem = (req, res) => {
  console.log(req.body.items);
};

exports.addNewItem = (req, res) => {
  const item = new Item(req.body);
  item.addItem().then((response) => {
    res.json(response);
  });
};

exports.deleteItem = (req, res) => {
  console.log(req.body);
}
