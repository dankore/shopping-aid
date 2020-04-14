const assert = require("chai").assert;
const uniqId = require("../server/helpers/uniqId");

describe('uniqId', function(){
    it("uniqId() should return a string", function () {
      assert.typeOf(uniqId(), "string");
    });
})