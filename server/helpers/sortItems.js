module.exports = {
  sortItems: (array) => {
    const fruits = [],
      veg = [],
      cond = [],
      frozen = [];

    for (let i = 0; i < array.length; i++) {
      array[i].categories.indexOf("Fruits") != -1 && fruits.push(array[i].item);
      array[i].categories.indexOf("Vegetables") != -1 && veg.push(array[i].item);
      array[i].categories.indexOf("Condiments") != -1 && cond.push(array[i].item);
      array[i].categories.indexOf("Frozen") != -1 && frozen.push(array[i].item);
    }

    return [fruits, veg, cond, frozen];
  },
};
