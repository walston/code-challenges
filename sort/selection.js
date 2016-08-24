function sort(array) {
  if (array.length < 2) return array;

  // set `key` = to first array element
  var key = 0;

  while (key < array.length - 1) {
    var lowest = array[key];
    var index = key;
    for (var i = key + 1; i < array.length; i++) {
      if (array[i] < lowest) {
        lowest = array[i];
        index = i;
      }
    }
    array[index] = array[key];
    array[key] = lowest;
    key++;
  }
}

module.exports = sort;
