function equi(A) {
  var i = 0;
  var before = sum(A.slice(0, i));
  var after = sum(A.slice(i+1, A.length));
  while (i < A.length) {
    if (before == after) {
      return i;
    }
    after -= A[i];
    i++;
    before += A[i];
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
