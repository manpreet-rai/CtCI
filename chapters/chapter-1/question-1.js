'use strict';

/**
 * Keep track of seen characters without using additional data structures, fail when
 * a repeated character is found.
 *
 * Time: O(N^2)
 * Space: O(1)
 *
 * @param  {string} str   String to check, passed in as a character array
 * @return {boolean}      True if unique characters, otherwise false
 */
const isUniqueCharactersPrimitive = (str) => {
  if (!str || (typeof str != "string")) {
    return false;
  }

  for (let i = 0; i < str.length - 1; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i].toLowerCase() === str[j].toLowerCase()) {
        return false;
      }
    }
  }

  return true;
}

/**
 * Keep track of seen characters with Set data structure, fail when
 * a repeated character is found.
 *
 * Time: O(N)
 * Space: O(N)
 *
 * @param  {string} str   String to check, passed in as a character array
 * @return {boolean}      True if unique characters, otherwise false
 */
const isUniqueCharactersSet = (str) => {
  if (!str || (typeof str != "string")) {
    return false;
  }

  const charSet = new Set();
  for(let i = 0; i < str.length; i++) {
    if (charSet.has(str[i].toLowerCase())) return false;
    charSet.add(str[i].toLowerCase())
  }

  return true;
}

/**
 * Keep track of seen characters with Sort, fail when
 * a repeated character is found.
 *
 * Time: O(N*LogN) // QuickSort Average, N*LogN > N so, overall time O(N*LogN)
 * Space: O(1)
 *
 * @param  {string} str   String to check, passed in as a character array
 * @return {boolean}      True if unique characters, otherwise false
 */
const isUniqueCharactersSort = (str) => {
  if (!str || (typeof str != "string")) {
    return false;
  }

  str = str.toLowerCase().split("").sort().join("")

  for(let i = 0; i < str.length - 1; i++) {
    if (str[i] === str[i+1]) {
      return false;
    }
  }

  return true;
}

module.exports = {
  isUniqueCharactersPrimitive,
  isUniqueCharactersSet,
  isUniqueCharactersSort
}
