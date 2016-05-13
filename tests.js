var arrays = require('./arrays.js');
var equi = require('./equi.js');

function stopwatch(method) {
  console.time(method);
  this[method] = equi(arrays[method]);
  console.log('result of', method + ':', this[method]);
  console.timeEnd(method);
}

for (array in arrays) {
  stopwatch(array)
}
