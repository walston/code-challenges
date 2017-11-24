function simplify(poly){
  console.log('poly', poly);

  var map = {};
  var termDef = '([\+\-]?)([0-9]*)([a-z]+)';
  var terms = poly.match(new RegExp(termDef, 'g'));
  console.log(terms);
  for (var i = 0; i < terms.length; i++) {
    // skip empty strings if (!term[i]) { continue; }

    var term = terms[i].match(new RegExp(termDef));
    console.log('term', term);
    var s = term[1] === '-' ? '-' : '+';
    var k = term[2] === '' ? 1 : term[2];
    // sort in lexicographical order
    var x = term[3].split('').sort().join('');

    if (map[x] !== undefined) {
      map[x] += Number(`${s}${k}`);
    } else {
      map[x] = Number(`${s}${k}`);
    }
  }

  simplified = '';

  return simplified.replace(/^\+/,'');
}

module.exports = simplify
