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
// TO COMPLETE
describe("sortString", function () {
  it("Should sort all elements in ascending order and return the first element", function () {
    const result = helper.sortStrings(["b", "c", "a", "h"])[0];
    assert.equal(result, "a");
  });
});
