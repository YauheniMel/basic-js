import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper (matrix) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let mine = 0;
  let res = [];
  let arr = [];

  matrix.forEach((item, index) => {
    item.forEach((item2, index2) => {
      if(matrix[index - 1]) {
        matrix[index - 1][index2 - 1] ? ++mine : true;
        matrix[index - 1][index2 + 1] ? ++mine : true;
        matrix[index - 1][index2] ? ++mine : true;
      }

      if(matrix[index + 1]) {
        matrix[index + 1][index2 - 1] ? ++mine : true;
        matrix[index + 1][index2 + 1] ? ++mine : true;
        matrix[index + 1][index2] ? ++mine : true;
      }

      matrix[index][index2 - 1] ? ++mine : true;
      matrix[index][index2 + 1] ? ++mine : true;

      arr.push(mine);
      mine = 0;
      if(arr.length == item.length) {
        res.push(arr);
        arr = [];
        console.log(res);
      }
    })
  })

  return res;
}
