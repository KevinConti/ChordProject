import test from 'ava';

let chord = require('./chord.js');

test('userArgs is initialized to correct values on proper input', t =>{
    'use strict';
    let testUserArgs = chord.userArgs(5,6);
    t.is(5, testUserArgs.getIdSpace());
    t.is(6, testUserArgs.getNumberOfNodes());
});

