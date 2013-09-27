
/**
 * Expose `isHexColor`.
 */

module.exports = isHexColor;


/**
 * Hex color matcher.
 */

var matcher = /^#[a-f0-9]{3}([a-f0-9]{3})?$/i;


/**
 * Check whether a `string` is a hex color.
 *
 * @param {String} string
 * @return {Boolean}
 */

function isHexColor (string) {
  return matcher.test(string);
}