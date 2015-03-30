"use strict";
var assert = require('assert');

describe('function in block examples', function () {
  it ('this always worked', function() {

    function greet() {

      function foo() {

        function greet() {
          return 'meow';
        }

        assert.equal(greet(), 'meow');
      }

      return 'woof';
    }

    // => woof in test scope
    assert.equal(greet(), 'woof');

  });

  it ('greet function declared in two different scopes', function() {

    function greet() {
      return 'woof';
    }

    if (true) {
      // function defined inside block
      function greet() {
        return 'meow';
      }

      assert.equal(greet(), 'meow');
    }

    assert.equal(greet(), 'woof');

  });

});