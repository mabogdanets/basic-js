const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let o, result = 0;
  for (let i = 0; i < matrix.length; i++){
      o = matrix[i];

      result += o.reduce(function(count, item ){
         return item ===  "^^" ? ( count + 1 ) : count;
      }, 0);
  }
 
return result;
};
//