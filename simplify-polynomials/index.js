function simplify(poly){
  console.log('poly', poly);

  var map = {};
  var multiplier = 1;
  var nega = false
  for (var i = 0; i < poly.length; i++) {
    c = poly[i];
    if (c === '-') {
      nega = true;
      multiplier = 1;

    } else if (c === '+') {
      nega = false;
      multiplier = 1;

    } else if (c.match(/\d/)) {
      multiplier = multiplier * 10 + parseInt(c, 10);

    } else if (c.match(/\w/)) {
      if (map[c] !== undefined) {
        map[c] += multiplier * (nega ? -1 : 1);
      } else {
        map[c] = multiplier * (nega ? -1 : 1);
      }

    } else {
      console.log('Oversight in poly:', poly, 'character:', c, '@', i);
    }
  }
  console.log('map',map);

  var sort = {}
  for (var Variable in map) {
    var m = map[Variable]
    if (sort[m]) {
      sort[m] += Variable;
    } else {
      sort[m] = Variable;
    }
  }
  console.log('sort', sort);

  var simplified = '';
  for (var Integer in sort) {
    var Variables = sort[Integer];
    if(Integer === '1') {
      simplified += `+${Variables}`;
    } else if (Integer === '-1') {
      simplified += `-${Variables}`;
    } else if (Integer === '0') {
      continue;
    } else {
      var sign = Integer[0] === '-' ? '' : '+';
      simplified += `${sign}${Integer}${Variables}`;
    }
  }
  console.log('simplified', simplified);

  return simplified.replace(/^\+/,'');
}

module.exports = simplify
