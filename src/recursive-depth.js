const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let deth = 1;
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        let deth2 = this.calculateDepth(arr[i]) + 1;
        if (deth2 > deth) {
          deth = deth2;
        }
      }
    }
    return deth;
  }
};
// let n = 10;

// Рекурсивно вычисляет произведение чисел от 1 до n
// function factorial(n) {
//   if (n === 0) {
//     return 1;
//   }
//   return factorial(n - 1) * n;
// }

// assert.equal(factorial(3), 6);

// assert.equal(calculateDepth([1, 2, 3, 4, 5, [1]]), 2);
// assert.equal(calculateDepth([1, 2, 3, [1], 4, 5, [1]]), 2);
// assert.equal(calculateDepth([1, 2, 3, [8, [2]], 4, 5, []]), 3);
// assert.equal(calculateDepth([1, [8, [[]]], 2, 3, [8, []], 4, 5, []]), 4);
// assert.equal(calculateDepth([1, [8, [[]]], 2, 3, [8, []], 4, 5, ['6575',['adas', ['dfg', [0]]]]]), 5);
// assert.equal(calculateDepth([1, [8, [[]]], 2, 3, [8, [[[[[[[[[[[[[]]]]]]]]]]]]]], 4, 5, ['6575',['adas', ['dfg', [0]]]]]), 15);
// assert.equal(calculateDepth([1, [8, [[]]], 2, 3, [8, [[[[[[[[[[[[[]]]]]]]]]]]]]], [8, [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]], 4, 5, ['6575',['adas', ['dfg', [0]]]]]), 25);
// assert.equal(calculateDepth([1, [8, [[]]], [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]], []]]], []]]]]]]]], []]]], []]]]]]]]]], 2, 3, [8, [[[[[[[[[[[[[[]]]]]]]]]]]]]]], [8, [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]], 4, 5, ['6575',['adas', ['dfg', [0]]]]]), 31);
