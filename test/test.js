const { assert } = require("chai");
const uniqId = require("../server/helpers/uniqId");
const { reverse, sortStrings, sortCategory } = require("../server/helpers/sortItems");
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
    const result = sortStrings([
      { id: "id", title: "Title of shopping list", items: ["c", "b", "a"] },
    ])[0].items[0];
    assert.equal(result, "a");
  });
});

describe("sortCategory", function () {
  it("Should sort category in ascending/alphabetical order and return last element", function () {
    const result = sortCategory([
      ["id2", "Broccoli", "Vegetables"],
      ["id1", "Apple", "Fruits"],
    ])[1][1];
    assert.equal(result, "Broccoli");
  });
});

describe("Capitalize", function () {
  it("Should capitalize(uppercase) each word", function () {
    const result = capitalize({
      id: "id",
      item: "Title of shopping list",
      categories: [],
    });
    assert.deepEqual(result, {
      id: "id",
      item: "Title Of Shopping List",
      categories: [],
    });
  });
});

describe("removeSpaces", function () {
  it("Should removeSpaces at beginning and end", function () {
    const result = removeSpaces({
      id: "id",
      item: "  Title of shopping list  ",
      categories: [],
    });
    assert.deepEqual(result, {
      id: "id",
      item: "Title of shopping list",
      categories: [],
    });
  });
});

