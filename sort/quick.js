function sort(array) {
  if (array.length < 2) return array;

  var pivot = Math.floor(Math.random() * array.length);
  var same = [];
  var below = [];
  var above = [];

  for (var i = 0; i < array.length; i++) {
    if (array[pivot] < array[i]) {
      below.push(array[i]);
    }
    else if (array[pivot] == array[i]) {
      same.push(array[i]);
    }
    else {
      above.push(array[i]);
    }
  }

  return sort(below).concat(same, sort(above));
}

module.exports = sort;
