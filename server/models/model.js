const itemsCollection = require("../../db").db().collection("items");

let Item = class item {
  constructor(data) {
    this.data = data;
  }
};

Item.prototype.addItem = function() {
  return new Promise(async (resolve, reject) => {
    await itemsCollection.findOneAndUpdate(
      {item: this.data.item },
      {$set: {categories: [this.data.categories ]}},
      {upsert: true, returnOriginal: false}
      ).then((info) => {
      console.log(info.ops);
      resolve();
    });
  });
};

module.exports = Item;
