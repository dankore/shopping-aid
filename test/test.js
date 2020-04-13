const assert = require("chai").assert;
const uniqId = require("../server/helpers/uniqId");

describe('uniqId', function(){
    it("uniqId() should return new Date().getTime()", function () {
      assert.equal(uniqId(), new Date().getTime());
    });
})