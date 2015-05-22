"use strict";
const assert = require('assert');

describe ('const', function() {

  it ('cannot redeclare a const', function() {

    const a = 5;

    // throws SyntaxError:
    // const a = 10;

  });

  it ('cannot reassign a const', function() {

    const a = 5;

    assert.throws(function() {
      // throws TypeError
      a = 10;

    });

  });

  it ('const requires an initial value', function() {

    // throws SyntaxError:
    // const a;

  });

  it ('remember, const object properties aren\'t protected', function() {

    const o = { name: 'silly' };

    o.name = 'sally';

    assert.equal(o.name, 'sally');

  });

});

