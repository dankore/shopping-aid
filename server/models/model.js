"use strict";
const itemsCollection = require("../../db").db().collection("items");
const shoppingListCollection = require("../../db")
  .db()
  .collection("shoppingList");
const statsCollection = require("../../db").db().collection("stats");
const ObjectId = require("mongodb").ObjectID;
const removeSpaces = require("../helpers/removeSpaces");
const capitalizeEachWord = require("../helpers/capitalize");
const removeDuplicates = require("../helpers/removeDuplicates");

// CLASS BEGINS
// USE THE 'FUNCTION' KEYWORD WITH PROTOTYPES
let Item = class item {
  constructor(data) {
    this.data = data;
  }
};
// CLASS ENDS

Item.prototype.saveAnItemToEachCategory = function () {
  return new Promise(async (resolve, reject) => {
    // CLEAN UP
    removeSpaces(this.data);
    capitalizeEachWord(this.data);

    await itemsCollection
      .findOneAndUpdate(
        { item: this.data.item },
        { $push: { categories: { $each: this.data.categories } } },
        { upsert: true, returnOriginal: false }
      )
      .then((info) => {
        info.value.categories = removeDuplicates(info.value.categories);
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

Item.removeItemFromACategory = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      await itemsCollection.findOneAndUpdate(
        { _id: new ObjectId(data.id) },
        { $pull: { categories: data.category } } // REMOVES ALL OCCURENCES OF THE ARRAY ELEM. AWESOME!
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
        Item.stats();
      })
      .catch((_) => {
        reject("Items were not added. Please try again.");
      });
  });
};

Item.stats = () => {
  return new Promise(async (resolve, reject) => {
    await statsCollection
      .findOneAndUpdate(
        {},
        { $inc: { numShoppingListCreated: 1 } },
        { upsert: true, returnOriginal: false }
      )
      .then((info) => {
        resolve(info.value);
      })
      .catch(() => {
        reject("Number shopping list created was not saved. Please try again.");
      });
  });
};

Item.getStats = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const stats = await statsCollection.find({}).toArray();
      resolve(stats);
    } catch {
      reject();
    }
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
    shoppingListCollection
      .deleteOne({ _id: new ObjectId(id) })
      .then(async () => {
        const allList = await Item.fetchSelectedItems();
        resolve(allList);
      })
      .catch(() => {
        reject("List was not deleted. Please try again.");
      });
  });
};

Item.deleteListItem = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      await shoppingListCollection.findOneAndUpdate(
        { _id: new ObjectId(data.id) },
        {
          $pull: { items: data.listItem },
        }
      );
      resolve();
    } catch {
      reject("Item from the list was not deleted. Please try again.");
    }
  });
};
module.exports = Item;
