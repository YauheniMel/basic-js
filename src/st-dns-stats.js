import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const DNS = {};
  if(domains[0] == undefined) return DNS;
  let arr = []
  domains.forEach((item, index) => {
    let arr2 = item.split(".").reverse();
    arr2.forEach((item2, index2) => {
      for(let i = 0; i <= index2; i++) {
        arr.push(arr2[i]);
      }

      const num = domains.length - index;

      console.log(num);
      if(DNS['.' + arr.join(".")]) {
        return arr = [];
      };
      DNS['.' + arr.join(".")] = num;
      arr = [];
    })
  })

  return DNS;
}
