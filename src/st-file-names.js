import { NotImplementedError } from '../extensions/index.js';

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
export default function renameFiles(names) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let newArr = [];
  names.forEach((item, index) => {
    let i = 0;

    for(let n = 0; n <= newArr.length; n++) {
      if(item == newArr[n]) {
        i++;
        newArr.push(`${item}(${i})`);
        return;
      }
    }
    newArr.push(item);
  })

  for(let a = 0; a < newArr.length; a++) {
    for(let b = a; b < newArr.length; b++) {
      if(newArr[a] == newArr[b + 1]) {
        console.log(newArr[b + 1]);
        let num = +newArr[b + 1].match(/\d/);

        newArr.splice(b + 1, 1, newArr[b + 1].replace(/\d/, num + 1))
      }
    }
  }

  return newArr;
}
