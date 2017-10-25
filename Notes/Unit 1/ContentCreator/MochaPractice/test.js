/*var assert = require("assert"); // core module
//var C = require('./cash.js');  // our module

describe('Cash Register', function(){
  describe('Module C', function(){
    it('should have a getChange Method', function(){
      //assert.equal(typeof C, 'object');
      assert.equal(typeof getChange, 'function');
    })
  })
});*/

var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
    it('should return 1 when the value is present', function() {
      assert.equal(0, [2,4,3].indexOf(2));
    });
  });
});
