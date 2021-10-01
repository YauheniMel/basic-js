import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
export default function getMatrixElementsSum(...matrix) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  matrix = matrix[0];

  if([...matrix][0] == 0) return 0;
  let arrIdx = [];
  let arr = [];
  for(let i = 0; i < matrix.length; i++) {
    for(let n = 0; n < matrix[i].length; n++) {
      if(matrix[i][n] !== 0) arr.push(n);
    }

    if([...arr][0] == undefined) break;
    arrIdx.push([...arr]);
    arr = [];
  }
  let sum = 0;
  let regExp = new RegExp(`[${arrIdx[0].join("")}]+`)

  arr = [];
  for(let k = 0; k < arrIdx.length; k++) {
    if(arrIdx[k]) {
      if(arrIdx[k].join("").match(regExp)) {
        let res = arrIdx[k].join("").match(regExp)[0];
        arr.push([...res.split("")]);
        regExp = new RegExp(`[${res}]+`)
      } else {
        break;
      }
    }
  }

  arr.forEach((item, index) => {
    item.forEach(item2 => {
      sum += [...matrix][index][item2];
    })
  })
  return sum;
}
