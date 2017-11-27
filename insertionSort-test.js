assert = require('chai').assert;
insertionSort = require('./insertionSort');

//insertion sort test

describe("insertionSort", function() {
 it("can sort an array", function() {
      assert.deepEqual(insertionSort([2, 1, 4, 3]), [1,2,3,4]);
    })
})
