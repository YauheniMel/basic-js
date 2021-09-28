import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
  calculateDepth(arr) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    if(!arr) return;
    console.log(arr)
    let newArr = [];
    arr.map((item)=> {
      if(Array.isArray(item)) {
        newArr.push(item);
      }
    })

    console.log(newArr);


    if(newArr[0] == undefined) return 1;

    return 1 + this.calculateDepth([].concat(...newArr));
  }
}


