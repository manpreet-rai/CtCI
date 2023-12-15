'use strict';

/**
 * Sort both strings and check if they are equal afterward. Permutations will
 * be identical sorted strings.
 *
 * N = |str1| && M = |str2|
 * Time: O(N lg N + M lg M)
 * Additional space: O(1) if able to modify original strings, O(N + M) otherwise
 *
 * @param  {string} str1   First string, passed in as a character array
 * @param  {string} str2   Second string, passed in as a character array
 * @return {boolean}       True if first and second strings are permutations otherwise false
 */
const checkPermutationSort = (str1, str2) => {
  if (typeof str1 !== "string" || typeof str2 !== "string" || str1.length === 0 || str1.length !== str2.length) {
    return false
  }

  str1 = str1.split("").sort().join("");
  str2 = str2.split("").sort().join("");

  return str1 === str2;
}

/**
 * Sort both strings and check if they are equal afterward. Permutations will
 * be identical sorted strings. Works with lowercase a-z only.
 *
 * Time: O(N)
 * Additional space: O(1)
 *
 * @param  {string} str1   First string, passed in as a character array
 * @param  {string} str2   Second string, passed in as a character array
 * @return {boolean}       True if first and second strings are permutations otherwise false
 */
const checkPermutationBitVector = (str1, str2) => {
  if (typeof str1 !== "string" || typeof str2 !== "string" || str1.length === 0 || str1.length !== str2.length) {
    return false
  }

  let bitVector = 0;
  for(let i = 0; i < str1.length; i++) {
    let val = str1.charCodeAt(i) - "a".charCodeAt(0);
    bitVector ^= (1 << val);

    val = str2.charCodeAt(i) - "a".charCodeAt(0);
    bitVector ^= (1 << val);
  }

  return bitVector === 0;
}

module.exports = {
  checkPermutationSort,
  checkPermutationBitVector
}