if (!process.argv[2]) {
  console.log('Error: Expected script as second argument');
  console.log('\tnode test.js');
  console.log('\t             ^');
  process.exit(1);
}
var sort = require('./' + process.argv[2]);
var arrays = require('./arrays.js');

function stopwatch(method) {
  console.time(method);
  this[method] = sort(arrays[method]);
  console.timeEnd(method);
}

for (array in arrays) {
  stopwatch(array)
}
