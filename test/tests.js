
describe('is-hex-color', function () {

  var assert = require('assert');
  var hex = require('is-hex-color');

  it('should recognize 6-digit hex colors', function () {
    assert(hex('#ffffff'));
    assert(hex('#FF0000'));
    assert(hex('#f0c34a'));
  });

  it('should recognize 3-digit hex colors', function () {
    assert(hex('#fff'));
    assert(hex('#F00'));
    assert(hex('#f89'));
  });

  it('should recognize non hex colors', function () {
    assert(!hex('a'));
    assert(!hex('FFFFFF'));
  });

});