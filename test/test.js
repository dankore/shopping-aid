const assert = require("chai").assert;
const uniqId = require("../server/helpers/uniqId");
const helper = require("../server/helpers/sortItems");
// const controller = require("../server/controllers/controller");


describe("uniqId", function () {
  it("uniqId() should return a string", function () {
    const uniq = uniqId();
    assert.typeOf(uniq, "string");
  });
});

describe("sort", function () {
  it("sort() should reverse an array and return the first element", function () {
    const reverse = helper.reverse([1, 2, 3])[0];
    assert.equal(reverse, 3);
  });
});
