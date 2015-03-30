"use strict"
var assert = require('assert'),
    util = require('util');

describe ('class examples', function() {

  class Animal {

    constructor(name, noise) {
      this.name = name;
      this.noise = noise;
      Animal.incrementCount();
    }

    makeNoise() {
      return util.format('%s says %s', this.name, this.noise);
    }

    static incrementCount() {
      if (!this.count) this.count = 0;
      this.count++;
    }

    static getCount() {
      return this.count || 0;
    }

  }

  class Dog extends Animal {
    constructor(name) {
      super(name, 'woof');
    }
  }

  class Cat extends Animal {
    constructor(name) {
      super(name, 'meow');
    }
  }

  it ('dog should say woof', function() {
    let dog = new Dog('fido');
    assert.equal( dog.name, 'fido' );
    assert.equal( dog.noise, 'woof' );
    assert.equal( dog.makeNoise(), 'fido says woof');
  });

  it ('cat should say meow', function() {
    let cat = new Cat('sylvester');
    assert.equal( cat.name, 'sylvester' );
    assert.equal( cat.noise, 'meow' );
    assert.equal( cat.makeNoise(), 'sylvester says meow');
  });

  it ('should keep track of animal count', function() {
    assert.equal( Animal.getCount(), 2 );
  });

});