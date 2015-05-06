"use strict"
const assert = require('assert');

describe ('set', function() {

  it ('sets can store any type including NaN', function() {

    let set = new Set( [1, 2] );

    assert.equal( set.size, 2 );
    assert( set.has(1) );
    assert( set.has(2) );

    set.add(3);
    set.add(3); // doesn't throw
    assert.equal( set.size, 3 );

    assert( set.has(3) );
    assert( !set.has(4) );

    set.delete(3);
    assert( !set.has(3) );
    assert.equal( set.size, 2 );

    set.add(NaN);
    assert( set.has(NaN) );
    assert.equal( set.size, 3 );

    set.add(Number('definitely not a number'));
    // set is still the same size
    assert.equal( set.size, 3 );

  });

});

describe ('set iteration examples', function() {

  let set = new Set( [ 'A', 'B' ] );

  it ('set size', function() {

    // the size of a set is the number of elements it has
    assert.equal(set.size, 2);

  });

  it ('set values iteration by forEach', function() {
    let values = [];

    // set.values().forEach
    set.forEach(function(value) {
      values.push(value);
    });

    assert.equal( values[0], 'A' );
    assert.equal( values[1], 'B' );

  });

  it ('set iteration', function() {
    let values = [];

    // iterate a set by key/value pairs (a pair is an array with 2 elements for the key and value)
    // arrays enumerate in the same order that set entries were added
    for (let item of set) {
      values.push(item);
    }

    assert.equal( values[0], 'A' );
    assert.equal( values[1], 'B' );

  });

  it ('set iteration by entries', function() {
    let entries = set.entries();

    let entry = entries.next();
    assert.equal( entry.done, false );
    assert.equal( entry.value[0], 'A' );
    assert.equal( entry.value[1], 'A' );

    entry = entries.next();
    assert.equal( entry.done, false );
    assert.equal( entry.value[0], 'B' );
    assert.equal( entry.value[1], 'B' );
  });

  it ('set iteration by keys', function() {

    let keys = set.keys();

    let next = keys.next();
    assert.equal( next.value, 'A' );
    assert.equal( next.done, false );

    next = keys.next();
    assert.equal( next.value, 'B' );
    assert.equal( next.done, false );

    next = keys.next();
    assert.equal( next.value, undefined );
    assert.equal( next.done, true );

  });

  it ('set iteration by values', function() {

    let values = set.values();

    let next = values.next();
    assert.equal( next.value, 'A' );
    assert.equal( next.done, false );

    next = values.next();
    assert.equal( next.value, 'B' );
    assert.equal( next.done, false );

    next = values.next();
    assert.equal( next.value, undefined );
    assert.equal( next.done, true );

  });

  it ('more set functions', function() {

    // set contains value='0'
    assert( set.has('A') );

    // delete the element where value='0'
    assert( set.delete('A') );

    // only 1 entry left
    assert(set.size, 1);

    set.clear();
    assert.equal(set.size, 0);

  });
});