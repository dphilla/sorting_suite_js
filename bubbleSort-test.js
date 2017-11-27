assert = require('chai').assert;
bubbleSort = require('./bubbleSort');

//bubble sort test

describe("bubbleSort", function() {
 it("can sort an array", function() {
      assert.deepEqual(bubbleSort([2, 1, 4, 3]), [1,2,3,4]);
    })
})

