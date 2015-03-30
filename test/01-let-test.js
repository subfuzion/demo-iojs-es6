// strict mode is required for block-scoped declarations (let, const, function, class)
// or a SyntaxError will be thrown
"use strict"

var assert = require('assert');


describe('var hoisting examples for reference', function () {

  // http://www.sitepoint.com/demystifying-javascript-variable-scope-hoisting/
  // http://code.tutsplus.com/tutorials/javascript-hoisting-explained--net-15092

  it('should throw a ReferenceError because `b` is never declared', function () {
    try {
      var a = b;
    } catch (err) {
      assert(err instanceof ReferenceError);
    }
  });

  it('should demonstrate var declaration hoisting', function () {
    // no error is thrown since b is declared in the function
    // (it's declaration is effectively "hoisted" to the top of the function);

    var a = b;
    var b = 'hello';

    // Note: although the *declaration* of b was hoisted, it's *value*
    // wasn't set until the line after the assignment to a
    // ==> b's value was undefined, therefore a is undefined
    assert(a === undefined);
  });

  it('redeclaration of var is still same variable', function () {
    var a = 3;

    if (true) {
      var a = 2; // same variable
      assert.equal(a, 2);
    }

    assert.equal(a, 2); // still same variable

  });

});


describe('let examples', function () {

  it('let does not hoist, so should throw a ReferenceError', function () {

    try {
      let a = b; // b is not declared and won't be hoisted, so this will fail
      let b = 'hello';
    } catch (err) {
      assert(err instanceof ReferenceError);
    }

  });

  it('let block scope', function () {

    let a = 3;
    let b = 2;

    if (true) {
      let a = 10;
      b = 20;
    }

    assert.equal(a, 3);
    assert.equal(b, 20);

  });

  it('let-scoped variables in for loops', function () {
    let i = 10;
    let counter = 0;

    // i scoped to for block
    for (let i = 0; i < 3; i++, counter++) {
    }

    assert.equal(counter, 3);
    assert.equal(i, 10);

  });

  it('careful with switch statements', function () {

    let a = 0;

    switch (a) {
      // the following case would fail:
      // (=> SyntaxError: Illegal let declaration in unprotected statement context)
      //
      //  case 0:
      //    let b;
      //    break;

      // explicit block is required:

      case 1:
      {
        let b;
        break;
      }
    }

  });

});


