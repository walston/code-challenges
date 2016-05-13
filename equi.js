function equi(A) {
  for (var i = 0; i < A.length; i++) {
    var before = sum(A.slice(0, i));
    var after = sum(A.slice(i + 1, A.length));
    if (before == after) {
      return i;
    }
  }
  return -1;
}

function sum(array) {
  var total = 0;
  for (var i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}

module.exports = equi;
