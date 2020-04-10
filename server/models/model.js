const itemsCollection = require("../../db").db().collection("items");

let Item = class item {
  constructor(data) {
    this.data = data;
  }
};

Item.prototype.addItem = function () {
  return new Promise(async (resolve, reject) => {
    await itemsCollection
      .findOneAndUpdate(
        { item: this.data.item },
        { $set: { categories: this.data.categories } },
        { upsert: true, returnOriginal: false }
      )
      .then((info) => {
        resolve(info.value);
      });
  });
};

Item.getAll = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let allItems = await itemsCollection.find({}).toArray();
      resolve(allItems);
    } catch (error) {
      reject();
    }
  });
};

Item.delete = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      await itemsCollection.findOneAndUpdate(
        { item: data.item },
        { $pull: { categories: data.category } }
      );
      resolve();
    } catch {
      reject("Item not removed. Please try again.");
    }
  });
};

module.exports = Item;
