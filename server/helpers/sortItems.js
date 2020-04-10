module.exports = {
  sortItems: (array) => {
    const fruits = [],
      veg = [],
      cond = [],
      frozen = [];

    for (let i = 0; i < array.length; i++) {
      array[i].categories.indexOf("Fruits") != -1 &&
        fruits.push([array[i]._id, array[i].item]);

      array[i].categories.indexOf("Vegetables") != -1 &&
        veg.push([array[i]._id, array[i].item]);

      array[i].categories.indexOf("Condiments") != -1 &&
        cond.push([array[i]._id, array[i].item]);

      array[i].categories.indexOf("Frozen") != -1 &&
        frozen.push([array[i]._id, array[i].item]);
    }

    return [reverse(fruits), reverse(veg), reverse(cond), reverse(frozen)];
  },
};

function reverse(array) {
  for (let i = 0; i < array.length / 2; i++) {
    let temp = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = temp;
  }
  return array;
}
