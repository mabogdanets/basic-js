const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let commands = [
    "--discard-next",
    "--discard-prev",
    "--double-next",
    "--double-prev",
  ];
  let outArr = [];
  if (!Array.isArray(arr)) {
    throw new Error("Ошибка!");
  } else if (arr.length === 0) {
    return arr;
  }
  for (let i = 0; i < arr.length; i++) {
    if (!commands.includes(arr[i]) && arr[i - 1] !== "--discard-next") {
      if (arr[i - 1] === "--double-next") {
        outArr.push(arr[i]);
        if (arr[i + 1] === "--double-prev") {
          outArr.push(arr[i]);
          outArr.push(arr[i]);
        } else if (arr[i + 1] !== "--discard-prev") {
          outArr.push(arr[i]);
        }
      } else {
        if (arr[i + 1] === "--double-prev") {
          outArr.push(arr[i]);
          outArr.push(arr[i]);
        } else if (arr[i + 1] !== "--discard-prev") {
          outArr.push(arr[i]);
        }
      }
    }
  }
  return outArr;
};
/*

transform([1, 2, 3, "--double-next"]);
transform(["--discard-prev", 1, 2, 3]);
transform(["--double-prev", 1, 2, 3]);
transform([1, 2, 3, "--discard-next"]); //[1, 2, 3];

transform([1, 2, 3, "--discard-next", 1337, "--double-prev", 4, 5]); //  output: [1, 2, 3, 4, 5]
transform([1, 2, 3, "--double-next", 1337, "--double-prev", 4, 5]); //  output: [1, 2, 3, 1337, 1337, 1337, 4, 5]
transform([1, 2, 3, "--discard-next", 1337, "--discard-prev", 4, 5]); //  output: [1, 2, 3, 4, 5]
transform([1, 2, 3, "--double-next", 1337, "--discard-prev", 4, 5]); //  output: [1, 2, 3, 1337, 4, 5];
*/
