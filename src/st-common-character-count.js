import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount( s1, s2 ) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let counter = 0;
  if(s1.length >= s2.length) {
    let arr = s2.split("");
    s1.split("").forEach((item1) => {
      if(s2.length) {
        arr = arr.filter((item2) => {
          if(item1 == item2) {
            counter++;
            item1 = '';
          } else {
            return true;
          }
        })
      }
    })
  } else {
    let arr = s1.split("");
    s2.split("").forEach((item1) => {
      if(s1.length) {
        arr = arr.filter((item2) => {
          if(item1 == item2) {
            counter++;
            item1 = '';
          } else {
            return true;
          }
        })
      }
    })
  }

  return counter;
}
