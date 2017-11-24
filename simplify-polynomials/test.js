const assert = require('assert');
const simplify = require('./index.js');

describe("Sample tests", _ => {
  it("reduction by equivalence", _ => {
    assert.equal(simplify("dc+dcba"),  "cd+abcd")
    assert.equal(simplify("2xy-yx"), "xy")
    assert.equal(simplify("-a+5ab+3a-c-2a"), "-c+5ab")
  })
  it("monomial length ordering", _ => {
    assert.equal(simplify("-abc+3a+2ac"), "3a+2ac-abc")
    assert.equal(simplify("xyz-xz"), "-xz+xyz")
  })
  it("lexicographic ordering", _ => {
    assert.equal(simplify("a+ca-ab"), "a-ab+ac")
    assert.equal(simplify("xzy+zby"), "byz+xyz")
  })
  it("no leading +", _ => {
    assert.equal(simplify("-y+x"), "x-y")
    assert.equal(simplify("y-x"), "-x+y")
  })
})
