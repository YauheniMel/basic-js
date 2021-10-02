import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
export default class VigenereCipheringMachine {
  constructor(indicator) {
    if(indicator) {
      this.encrypt.call;
    } else {
      this.decrypt.call;
    }
  }

  encrypt(message, key) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    try {
      let str = message.replace(/\s/gim, '').toLowerCase();
      while(key.length < str.length) {
        key += key;
      }

      key = key.slice(0, str.length).toLowerCase();
      let start = 'a';
      let end = 'z';
      let result = [];
      let result3 = [];
      for(let i = 0; i < str.length; i++) {
        let l, k;
        l = key[i].charCodeAt() - start.charCodeAt();
        if(start.charCodeAt() - str[i].charCodeAt() > 0 || start.charCodeAt() - str[i].charCodeAt() + 26 < 0) {
          k = str[i].charCodeAt();
        } else if((end.charCodeAt() - str[i].charCodeAt()) > l) {
          k = key[i].charCodeAt() + str[i].charCodeAt() - start.charCodeAt();
        } else{
          k = start.charCodeAt() + (key[i].charCodeAt() - start.charCodeAt() - (end.charCodeAt() - str[i].charCodeAt())) - 1;
        }
        if(k) {
          result3.push(String.fromCodePoint(k));
        };
      }
      result3 = result3.join("");

      let res = [];
      let m = 0;
      message.split(" ").map((item) => {
        result = result3;

        res.push(result.slice(m, m + item.length).toUpperCase());
        m += item.length;
      })

      return res.join(" ");
    } catch {
      throw new Error('Incorrect arguments!');
    }
  }

  decrypt(encryptedMessage, key) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    try {
      let str = encryptedMessage.replace(/\s/gim, '').toLowerCase();
      while(key.length < str.length) {
        key += key;
      }

      key = key.slice(0, str.length).toLowerCase();
      let result = [];
      let result3 = [];
      let start = 'a';
      let end = 'z';
      for(let i = 0; i < str.length; i++) {
        let l, k;
        l = key[i].charCodeAt() - start.charCodeAt();
        if(start.charCodeAt() - str[i].charCodeAt() > 0 || start.charCodeAt() - str[i].charCodeAt() + 26 < 0) {
          k = str[i].charCodeAt();
        } else if((str[i].charCodeAt() - start.charCodeAt()) >= (key[i].charCodeAt() - start.charCodeAt())) {
          k = ((str[i].charCodeAt() - start.charCodeAt()) - (key[i].charCodeAt() - start.charCodeAt())) + start.charCodeAt();
        } else {
          k = (end.codePointAt() - key[i].charCodeAt()) + (str[i].charCodeAt() - start.charCodeAt()) + start.charCodeAt() + 1;
        }
        if(k) {
          result3.push(String.fromCodePoint(k));
        };
      }
      result3 = result3.join("");

      let res = [];
      let m = 0;
      encryptedMessage.split(" ").map((item) => {
        result = result3;

        res.push(result.slice(m, m + item.length).toUpperCase());
        m += item.length;
      })

      return res.join(" ");
    } catch {
      throw new Error('Incorrect arguments!');
    }
  }
}
