/* function curry(fja) {
  let rez = 1;
  return function inner(x) {
    if (!x) {
      return rez;
    }
    if (x > 0 && x <= 20) {
      rez = fja(rez, x);
    }

    return inner;
  };
}

const pomnozi = curry((a, b) => a * b);
console.log(pomnozi(-5)(10)(2)(50)());
 */

let curry = (fja) => {
  let rez = 1;
  return function inner(x) {
    {
      if (!x) return rez;
      if (x > 0 && x <= 20) {
        rez = fja(rez, x);
      }
      return inner;
    }
  };
};
const pomnozi = curry((a, b) => a * b);
console.log(pomnozi(-5)(10)(2)(50)());
