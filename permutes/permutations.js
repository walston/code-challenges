function permutations(string) {
  if (string.length < 2) return [string];
  var permuted = [];
  for (var i = 0; i < string.length; i++) {
    var p = string.split('');
    p[0] = string[i];
    p[i] = string[0];
    permuted = permuted.concat(
      permutations(p.slice(1).join('')).map(
        function(permutation) {
          return p[0] + permutation;
        }
      )
    );
  }
  return unique(permuted);
}

function unique(A) {
  var array = A.sort();
  var result = [array[0]];
  for (var i = 1; i < array.length; i++) {
    if (array[i] !== array[i-1]) result.push(array[i]);
  }
  return result;
}
