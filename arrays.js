module.exports.simple = [-1, 3, -4, 5, 1, -6, 2, 1];
module.exports.obvious = [1, 0, 1];
module.exports.empty = [];
module.exports.none = [1, 2, 3, 4, 5, 6];
module.exports.huge = (function() {
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
