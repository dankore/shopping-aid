const { assert } = require("chai");
const uniqId = require("../server/helpers/uniqId");
const {
  reverse,
  sortStrings,
  sortCategory,
} = require("../server/helpers/sortItems");
const capitalize = require("../server/helpers/capitalize");
const removeSpaces = require("../server/helpers/removeSpaces");

describe("uniqId", function () {
  it("Should return a string", function () {
    const result = uniqId();
    assert.typeOf(result, "string");
  });
});

describe("reverse", function () {
  it("Should reverse an array and return the first element", function () {
    const result = reverse([1, 2, 3])[0];
    assert.equal(result, 3);
  });
});

describe("sortString", function () {
  it("Should sort all elements in ascending/alphabetical order and return the first element", function () {
    const [arr1] = sortStrings([
      { id: "id", title: "Title of shopping list", items: ["c", "b", "a"] },
    ]);
    assert.equal(arr1.items[0], "a");
  });
});

describe("sortCategory", function () {
  it("Should sort category in ascending/alphabetical order and return last element", function () {
    const [, arr2 ] = sortCategory([
      ["id2", "Broccoli", "Vegetables"],
      ["id1", "Apple", "Fruits"],
    ])[1];
    assert.equal(arr2, "Broccoli");
  });
});

describe("Capitalize", function () {
  it("Should capitalize(uppercase) each word of the 'item' property", function () {
    const { item } = capitalize({
      id: "id",
      item: "Title of shopping list",
      categories: [],
    });
    assert.deepEqual(item, "Title Of Shopping List");
  });
});

describe("removeSpaces", function () {
  it("Should removeSpaces at beginning and end", function () {
    const { item } = removeSpaces({
      id: "id",
      item: "  Title of shopping list  ",
      categories: [],
    });
    assert.deepEqual(item, "Title of shopping list");
  });
});
