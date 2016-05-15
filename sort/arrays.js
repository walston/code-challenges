module.exports.single_item = [1];
module.exports.two_items = [0,1];
module.exports.sorted_list = [0,0,0,0,0,0,0,0,0,0,1];
module.exports.inverse_sorted = [10,9,8,7,6,5,4,3,2,1];
module.exports.power_of_10_1 = randomArray(10);
module.exports.power_of_10_3 = randomArray(Math.pow(10, 3));
module.exports.power_of_10_4 = randomArray(Math.pow(10, 4));
module.exports.power_of_10_5 = randomArray(Math.pow(10, 5));

function randomArray(highest) {
  console.log('Generating random list of', highest, ':');
  var array = new Array(highest);
  var i = 0;
  while (!array[i] && i < highest) {
    array[i] = Math.floor(Math.random() * highest) - (highest/2);
    i++;
  }
  return array;
}
