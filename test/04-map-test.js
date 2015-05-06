"use strict"
const assert = require('assert');

describe ('map', function() {

  it ('maps can use types other than strings for keys', function() {

    let map = new Map();

    let s = '';
    let i = 0;
    let obj = {};
    let func = function() {};

    map.set(s, 'key is a string');
    map.set(i, 'key is a number');
    map.set(obj, 'key is an object');
    map.set(func, 'key is a function');

    assert.equal(map.get(s), 'key is a string');
    assert.equal(map.get(i), 'key is a number');
    assert.equal(map.get(obj), 'key is an object');
    assert.equal(map.get(func), 'key is a function');

  });

  it ('maps work with NaN also', function() {

    let map = new Map();

    map.set(NaN, 'key is not a number');

    let nan = Number('definitely not a number');

    // even though NaN !==  NaN, this still works because the keys are indistinguishable
    assert.equal(map.get(nan), 'key is not a number');

    // (just to prove NaN !== NaN)
    assert(NaN !== NaN);

  });


});

describe ('map iteration examples', function() {

  let map = new Map();

  for (let i = 0; i < 2; i++) {
    map.set(i, String(i));
  }

  it ('map size', function() {

    // the size of a map is the number of key/value pairs it has
    assert.equal(map.size, 2);

  });

  it ('map values iteration by forEach', function() {
    let values = [];

    // map.values().forEach
    map.forEach(function(value) {
      values.push(value);
    });

    for (let i = 0; i < map.size; i++) {
      assert.equal(values[i], map.get(i));
    }

  });

  it ('map pair array iteration', function() {
    let pairs = [];

    // iterate a map by key/value pairs (a pair is an array with 2 elements for the key and value)
    // arrays enumerate in the same order that map entries were added
    for (let pair of map) {
      pairs.push(pair);
    }

    let first = pairs[0];
    assert.equal(first[0], 0);
    assert.equal(first[1], '0');

    let second = pairs[1];
    assert.equal(second[0], 1);
    assert.equal(second[1], '1');

  });

  it ('map iteration by entries', function() {
    let entries = map.entries();

    let entry = entries.next();
    assert.equal( entry.done, false );
    assert.equal( entry.value[0], 0 );
    assert.equal( entry.value[1], '0' );

    entry = entries.next();
    assert.equal( entry.done, false );
    assert.equal( entry.value[0], 1 );
    assert.equal( entry.value[1], '1' );
  });

  it ('map iteration by keys', function() {

    let keys = map.keys();

    let next = keys.next();
    assert.equal( next.value, 0 );
    assert.equal( next.done, false );

    next = keys.next();
    assert.equal( next.value, 1 );
    assert.equal( next.done, false );

    next = keys.next();
    assert.equal( next.value, undefined );
    assert.equal( next.done, true );

  });

  it ('map iteration by values', function() {

    let values = map.values();

    let next = values.next();
    assert.equal( next.value, '0' );
    assert.equal( next.done, false );

    next = values.next();
    assert.equal( next.value, '1' );
    assert.equal( next.done, false );

    next = values.next();
    assert.equal( next.value, undefined );
    assert.equal( next.done, true );

  });

  it ('more map functions', function() {

    // map has entry with key=0
    assert( map.has(0) );

    // delete the entry for key=0
    assert( map.delete(0) );

    // only 1 entry left
    assert.equal(map.size, 1);

    map.clear();
    assert.equal(map.size, 0);

  });
});