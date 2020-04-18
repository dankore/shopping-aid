const assert = require("chai").assert;
const uniqId = require("../server/helpers/uniqId");
const helper = require("../server/helpers/sortItems");

describe("uniqId", function () {
  it("Should return a string", function () {
    const result = uniqId();
    assert.typeOf(result, "string");
  });
});

describe("reverse", function () {
  it("Should reverse an array and return the first element", function () {
    const result = helper.reverse([1, 2, 3])[0];
    assert.equal(result, 3);
  });
});

describe("sortString", function () {
  it("Should sort all elements in ascending/alphabetical order and return the first element", function () {
    const result = helper.sortStrings([
      { id: "id", title: "Title of shopping list", items: ["c", "b", "a"] },
    ])[0].items[0];
    assert.equal(result, "a");
  });
});
describe("sortCategory", function () {
  it("Should sort category in ascending/alphabetical order and return last element", function () {
    const result = helper.sortCategory([
      ["id2", "Broccoli", "Vegetables"],
      ["id1", "Apple", "Fruits"],
    ])[1][1];
    console.log(result);
    assert.equal(result, "Broccoli");
  });
});
