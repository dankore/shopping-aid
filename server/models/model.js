const itemsCollection = require("../../db").db().collection("items");
const shoppingListCollection = require("../../db")
  .db()
  .collection("shoppingList");
const ObjectId = require("mongodb").ObjectID;
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
        { _id: new ObjectId(data.id) },
        { $pull: { categories: data.category } }
      );
      resolve();
    } catch {
      reject("Item not removed. Please try again.");
    }
  });
};

Item.saveSelectedItems = (data) => {
  return new Promise(async (resolve, reject) => {
    await shoppingListCollection
      .insertOne(data)
      .then((info) => {
        resolve(info.ops);
      })
      .catch((_) => {
        reject("Items were not added. Please try again.");
      });
  });
};

Item.fetchSelectedItems = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let allList = await shoppingListCollection.find({}).toArray();
      resolve(allList);
    } catch (error) {
      reject();
    }
  });
};

Item.deleteList = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      await shoppingListCollection.deleteOne({ _id: new ObjectId(id) });
      resolve();
    } catch (error) {
      reject("List was not deleted. Please try again.");
    }
  });
};

Item.deleteListItem = (data) =>{
    return new Promise(async(resolve, reject) =>{
        try {
            await shoppingListCollection.findOneAndUpdate(
                {_id: new ObjectId(data.id)},
                {
                    $pull: { items: data.listItem }
                }
            );
            resolve();
        } catch {
            reject("Item from the list was not deleted. Please try again.")
        }
    })
}
module.exports = Item;
