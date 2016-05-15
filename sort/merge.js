function sort(array) {
  if (array.length < 2) {
    return array;
  }
  else {
    var mid = Math.floor(array.length * 0.5);
    var left = array.slice(0, mid);
    var right = array.slice(mid, array.length);
    return merge(sort(left), sort(right));
  }
}

function merge(left, right) {
  var result = [];

  while(left.length || right.length) {
    if(left.length && right.length) {
      if(left[0] < right[0]) {
        result.push(left.shift());
      }
      else {
        result.push(right.shift());
      }
    }
    else if (left.length) {
      result.push(left.shift());
    }
    else {
      result.push(right.shift());
    }
  }
  return result;
}

module.exports = sort
