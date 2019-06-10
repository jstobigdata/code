export class NumberUtil {
  generateRandom(min, max) {
    if (min && max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    console.error("Pass valid min & max");
  }

  isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  roundNumber(number, fixedPosition) {
    return num.toFixed(fixedPosition);
  }
}

const PI = Math.PI;

export function print() {
  console.log("Exported and invoked print()");
}

export {
  PI
};