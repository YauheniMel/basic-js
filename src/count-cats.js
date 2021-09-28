import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
export default function countCats(...matrix) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let newArr = [];
  matrix.forEach((item) => {
    if(Array.isArray(item)) {
      newArr = newArr.concat(...item);
    }
  });

  let cats = 0;

  newArr.forEach((item) => {
    if (item == '^^') {
      cats++;
    }
  });
  return cats;
}
