'use strict';

const ques2 = require("../../chapters/chapter-1/question-2");

// Sample strings to test
const str1 = "abca";
const str2 = "baca";
const str3 = "bcda";
const str4 = "hsjdhd";
const str5 = 23;
const str6 = "";

// Non-unique string
test('checkPermutation on "abca" & "baca"', () => {
  expect(ques2.checkPermutationSort(str1, str2)).toBe(true);
  expect(ques2.checkPermutationBitVector(str1, str2)).toBe(true);
});

test('checkPermutation on "abca" & "bcda"', () => {
  expect(ques2.checkPermutationSort(str1, str3)).toBe(false);
  expect(ques2.checkPermutationBitVector(str1, str3)).toBe(false);
});

test('checkPermutation on "abca" & "hsjdhd"', () => {
  expect(ques2.checkPermutationSort(str1, str4)).toBe(false);
  expect(ques2.checkPermutationBitVector(str1, str4)).toBe(false);
});

test('checkPermutation on "abc" & 23', () => {
  expect(ques2.checkPermutationSort(str1, str5)).toBe(false);
  expect(ques2.checkPermutationBitVector(str1, str5)).toBe(false);
});

test('checkPermutation on "abc" & ""', () => {
  expect(ques2.checkPermutationSort(str1, str6)).toBe(false);
  expect(ques2.checkPermutationBitVector(str1, str6)).toBe(false);
});