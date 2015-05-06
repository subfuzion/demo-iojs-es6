"use strict"
const assert = require('assert');

describe('promise', function () {
  // increase mocha default timeout (2 sec) so tests can run
  this.timeout(5000);

  // standard idiomatic node async function that expects a callback
  // this example expects a timeout value in milliseconds; the function
  // will callback with the string 'success' unless the timeout value
  // exceeded 3000 ms, in which case it will callback with an error after
  // 3000 ms
  function asyncFunc(timeout, callback) {
    let limit = Math.min(timeout, 3000);

    setTimeout(function () {

      if (limit < timeout) {
        return callback(new Error('timed out'));
      }

      callback(null, 'success');

    }, limit);
  }

  // promisified version of asyncFunc
  function promiseFunc(timeout) {

    return new Promise(function (resolve, reject) {

      asyncFunc(timeout, function (err, result) {

        return err ? reject(err) : resolve(result);

      });

    });
  }

  it('should succeed after 2 seconds', function (done) {

    promiseFunc(2000)
        .then(function (result) {

          assert.equal(result, 'success');
          done();

        })
        .catch(function (err) {
          done(err);
        });

  });

  it('should fail after 3 seconds', function (done) {

    promiseFunc(9000)
        .then(function (result) {
          done(new Error('should not have succeeded'));
        })
        .catch(function (err) {

          done();
        });

  });

  // this example also demonstrates arrow functions ("fat arrow")
  it('should chain consecutive then actions', function (done) {
    let counter = 0;

    promiseFunc(1000)
        .then((result) => {

          counter++;
          assert.equal(result, 'success');
          return promiseFunc(1000);

        }).then((result) => {

          counter++;
          assert.equal(counter, 2);
          assert.equal(result, 'success');
          done();

        });

  });

});

