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
 * Keep track of seen characters without using Bit Vector, fail when a repeated character is found.
 * This approach assumes all characters are lowercase and maximum of 26 types of
 * alphabets used and no other symbol or digits or uppercase characters
 * used. As 32 bits can be used to store 26 bits
 * representing each english alphabet.
 *
 * Time: O(N^2)
 * Space: O(1)
 *
 * @param  {string} str   String to check, passed in as a character array
 * @return {boolean}      True if unique characters, otherwise false
 */
const isUniqueCharactersBitVector = (str) => {
  if (!str || (typeof str != "string")) {
    return false;
  }

  let checker = 0;
  for(let i = 0; i < str.length; i++) {
    const val = str.charCodeAt(i) - "a".charCodeAt(0);

    // Basically, shifts 1 by amount of difference
    // between a and current character,
    // acts like hashmap
    if (checker & (1 << val)) {
      return false;
    }

    checker |= (1 << val)
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
  isUniqueCharactersBitVector,
  isUniqueCharactersSet,
  isUniqueCharactersSort
}
