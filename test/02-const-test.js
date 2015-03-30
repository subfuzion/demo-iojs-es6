"use strict";
var assert = require('assert');

describe ('const examples', function() {

  it ('can\'t redeclare a const', function() {

    const a = 5;
    // const a = 10; // throws SyntaxError

  });

  it ('can\'t reassign a const', function() {

    const a = 5;

    assert.throws(function() {
      // throws TypeError
      a = 10;

    });

  });

  it ('const requires an initial value', function() {

    // const a; // throws SyntaxError

  });

  it ('const object properties aren\'t protected', function() {

    const o = { name: 'silly' };

    o.name = 'sally';

    assert.equal(o.name, 'sally');

  });

});

