const itemsCollection = require("../../db").db().collection("items");

let Item = class item {
  constructor(data) {
    this.data = data;
  }
};

Item.prototype.addItem = function() {
  return new Promise(async (resolve, reject) => {
    await itemsCollection.insertOne(this.data).then((info) => {
      console.log(info.ops);
      resolve();
    });
  });
};

module.exports = Item;
