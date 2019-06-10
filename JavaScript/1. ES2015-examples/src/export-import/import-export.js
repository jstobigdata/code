import {
  NumberUtil,
  PI,
  print
} from './number-util.js';

const numUtil = new NumberUtil();

console.log(PI); //3.141592653589793
console.log(numUtil.generateRandom(10, 1111111));
console.log(numUtil.isNumber(0 / 0)); //false