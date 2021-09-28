import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if(Array.isArray(members)) {
    const dremTeamRandom = members.map((item) => {
      if(!isFinite(item) && item && typeof item == 'string') {
        return item.trim()[0].toUpperCase();
      }
    })

    const dremTeam = dremTeamRandom.sort();

    return dremTeam.join("");
  }

  return false;
}
