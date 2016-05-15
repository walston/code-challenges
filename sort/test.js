var merge = require('./merge.js');
var arrays = require('./arrays.js');

function stopwatch(method) {
  console.time(method);
  this[method] = merge(arrays[method]);
  console.timeEnd(method);
}

for (array in arrays) {
  stopwatch(array)
}
