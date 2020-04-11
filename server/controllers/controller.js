const Item = require("../models/model");
const { sortItems } = require("../helpers/sortItems");

exports.home = async (req, res) => {
  try {
    const items = await Item.getAll();
    const sorted = sortItems(items);
    
    res.render("home", { fruits: sorted[0], veg: sorted[1] });
  } catch (error) {
    console.log(error);
  }
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
  Item.delete(req.body)
    .then(() => {
      res.json("Success");
    })
    .catch((err) => {
      res.json(err);
    });
};
