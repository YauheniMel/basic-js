import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  if(!str) return '';

  let arr = str.split("");
  let i = 1;
  let newArr = [];
  arr = arr.filter((item, index) => {
    if(arr[index + 1] && item == arr[index + 1]) {
      i++;
    } else {
      i == 1
        ? newArr.push(item)
        : newArr.push(`${i}${item}`);
      i = 1;
    }
  })

  return newArr.join("");
}
