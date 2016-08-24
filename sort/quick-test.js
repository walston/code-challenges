if (!process.argv[2]) {
  console.log('Error: Expected script as second argument');
  console.log('\tnode ' + process.argv[1]);
  console.log('\t      ' + process.argv[1].replace(/./g,' ') + '^');
  process.exit(1);
}
var sort = require('./' + process.argv[2]);
var arrays = { practice_list: [3,5,1,7,9,2,6] };

function stopwatch(array) {
  console.time(array);
  this[array] = sort(arrays[array]);
  console.timeEnd(array);
}

stopwatch('practice_list');
