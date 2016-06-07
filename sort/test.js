var sort = require('./quick.js');
var arrays = require('./arrays.js');

function stopwatch(method) {
  console.time(method);
  this[method] = sort(arrays[method]);
  console.timeEnd(method);
}

for (array in arrays) {
  stopwatch(array)
}
