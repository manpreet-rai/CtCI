'use strict';

const ques1 = require("../../chapters/chapter-1/question-1");

// Sample strings to test
const str1 = "Some string";
const str2 = "Some thing";
const str3 = "";
const str4 = 23;
const str5 = false;

// Non-unique string
test('isUnique on "Some string"', () => {
  expect(ques1.isUniqueCharactersPrimitive(str1)).toBe(false)
})

// Unique string
test('isUnique on "Some thing"', () => {
  expect(ques1.isUniqueCharactersPrimitive(str2)).toBe(true)
})

// Empty string
test('isUnique on ""', () => {
  expect(ques1.isUniqueCharactersPrimitive(str3)).toBe(false)
})

// Non-string (Number)
test('isUnique on 23', () => {
  expect(ques1.isUniqueCharactersPrimitive(str4)).toBe(false)
})

// Non-string (Boolean)
test('isUnique on false', () => {
  expect(ques1.isUniqueCharactersPrimitive(str5)).toBe(false)
})