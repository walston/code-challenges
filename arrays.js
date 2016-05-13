module.exports.simple = [-1, 3, -4, 5, 1, -6, 2, 1];
  // ANSWER: 1
module.exports.obvious = [1, 1, 0, 2];
  // ANSWER: 1
module.exports.empty = [];
  // ANSWER: -1
module.exports.none = [1, 2, 3, 4, 5, 6];
  // ANSWER: -1
module.exports.large = (function() {
  var top = 50000;
  var x = [];
  var i = 0;
  while (i < top) {
    var k = Math.floor((Math.random() * 10) - 20);
    x.push(k);
    i++
  }
  return x.concat([0], x);
})();
  // ANSWER: 50000
module.exports.right_weighted = [1, 2, 3, 4, 0, 10];
  // ANSWER: 4
  module.exports.huge = (function() {
    var top = 10000000;
    var x = [];
    var i = 0;
    while (i < top) {
      var k = Math.floor((Math.random() * 10) - 20);
      x.push(k);
      i++
    }
    return x.concat([0], x);
  })();
    // ANSWER: 10000000
