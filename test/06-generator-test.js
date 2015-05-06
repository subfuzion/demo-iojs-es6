"use strict"
const assert = require('assert');

describe('generator', function() {

  it ('should generate consecutive numbers from 0-2', function() {

    function* numgenerator() {
      yield 0;
      yield 1;
      yield 2;
    }

    let g = numgenerator();

    assert.equal(g.next().value, 0);
    assert.equal(g.next().value, 1);
    assert.equal(g.next().value, 2);

    // return object conforms to iterator protocol (has done and value properties)
    let next = g.next();
    assert(next.done);
    assert.equal(next.value, undefined);

  });

  it ('should catch exception when calling next the second time', function() {

    function* errorGenerator() {
      yield 1;
      throw new Error('')
    }

    let g = errorGenerator();

    assert.equal(g.next().value, 1);

    assert.throws(function() {
      g.next();
    });

  });

});
