const assert = require("chai").assert;
const uniqId = require("../server/helpers/uniqId");
const helper = require("../server/helpers/sortItems");

describe('uniqId', function(){
    it("uniqId() should return a string", function () {
      assert.typeOf(uniqId(), "string");
    });
})

describe('sort', function(){
    it("sort() should reverse a string. Returns the first element", function () {
      assert.equal(helper.reverse([1,2,3])[0], 3);
    });
})