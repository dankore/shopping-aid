const assert = require("chai").assert;
const App = require("../app");

describe('model', function(){
    it('model hello() should return hello', function(){
        assert.equal(App(), "hello")
    })
})