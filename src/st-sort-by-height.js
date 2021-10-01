import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let newArr = arr.filter((item) => item != -1);
  newArr = newArr.sort((a, b) => {
    if(+a > +b) return 1;
    if(+a < +b) return -1;
  });

  arr = arr.map((item, index) => {
    if(item != -1) {
      let firstItem = newArr.shift();
      return firstItem
    } else {
      return -1;
    }
  })
  return arr;
}
