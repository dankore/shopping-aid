const itemsCollection = require("../../db").db().collection("items");

let Item = class item {
  constructor(data){
    this.data = data;
  }
}

Item.prototype.addItem = (data) => {
  return new Promise(async(resolve, reject)=> {
    await itemsCollection.insertOne(this.data);
  })
}

module.exports = Item;