
function swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function bubbleSort(array) {

  let run = true;

  while (run) {
    run = false;

    for (var i = 1; i < array.length; i++) {
      if (array[i-1] > array[i]) {
        swap(array, i-1, i);
        run = true;
      }
    }
  }
 return array;
}

module.exports = bubbleSort
