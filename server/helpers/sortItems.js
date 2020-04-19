const helperObject = {
  sortItems: (array) => {
    const fruits = [],
      veg = [],
      cond = [],
      frozen = [],
      meat = [],
      fresh = [],
      kids = [],
      others = [],
      health = [],
      electronics = [];

    for (let i = 0; i < array.length; i++) {
      array[i].categories.indexOf("Fruits") != -1 &&
        fruits.push([array[i]._id, array[i].item, "Fruits"]);

      array[i].categories.indexOf("Vegetables") != -1 &&
        veg.push([array[i]._id, array[i].item, "Vegetables"]);

      array[i].categories.indexOf("Condiments") != -1 &&
        cond.push([array[i]._id, array[i].item, "Condiments"]);

      array[i].categories.indexOf("Frozen") != -1 &&
        frozen.push([array[i]._id, array[i].item, "Frozen"]);

      array[i].categories.indexOf("Meat") != -1 &&
        meat.push([array[i]._id, array[i].item, "Meat"]);

      array[i].categories.indexOf("Fresh") != -1 &&
        fresh.push([array[i]._id, array[i].item, "Fresh"]);
      
      array[i].categories.indexOf("Kids") != -1 &&
        kids.push([array[i]._id, array[i].item, "Kids"]);
      
      array[i].categories.indexOf("Others") != -1 &&
        others.push([array[i]._id, array[i].item, "Others"]);
      
      array[i].categories.indexOf("Health") != -1 &&
        health.push([array[i]._id, array[i].item, "Health"]);
      
        array[i].categories.indexOf("Electronics") != -1 &&
        electronics.push([array[i]._id, array[i].item, "Electronics"]);
    }

    return {
      fruits: helperObject.sortCategory(fruits),
      veg: helperObject.sortCategory(veg),
      cond: helperObject.sortCategory(cond),
      frozen: helperObject.sortCategory(frozen),
      meat: helperObject.sortCategory(meat),
      fresh: helperObject.sortCategory(fresh),
      kids: helperObject.sortCategory(kids),
      others: helperObject.sortCategory(others),
      health: helperObject.sortCategory(health),
      electronics: helperObject.sortCategory(electronics),
    };
  },

  sortCategory: (array) => {
    return array.sort(
      (a, b) =>
        (a[1].toLowerCase() > b[1].toLowerCase() && 1) ||
        (a[1].toLowerCase() == b[1].toLowerCase() ? 0 : -1)
    );
  },

  sortStrings: (array) => {
    for (let i = 0; i < array.length; i++) {
      array[i].items.sort(
        (a, b) =>
          (a.toLowerCase() > b.toLowerCase() && 1) ||
          (a.toLowerCase() == b.toLowerCase() ? 0 : -1)
      );
    }
    return array;
  },

  reverse: (array) => {
    for (let i = 0; i < array.length / 2; i++) {
      let temp = array[i];
      array[i] = array[array.length - 1 - i];
      array[array.length - 1 - i] = temp;
    }
    return array;
  },
};

module.exports = helperObject;
