const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(inputDate) {
  if(!inputDate){
      return 'Unable to determine the time of year!';
  } else if(Object.prototype.toString.call(inputDate) !== '[object Date]'){
      throw new Error("Ошибка!");
  }
 
  let month = inputDate.getMonth(); 
  let o;
  switch(month){
      case 11 :
        case 0 :
            case  1:
              o = "winter";
              break;  
      case 2 :
        case 3 :
          case 4 :
              o = "spring";
              break;
      case 5 :
          case 6 :
              case 7 :
                  o = "summer";
                  break;
      case 8 :
        case 9 :
          case 10 :
              o = "autumn";
              break;  
  }
 return o;
  
};

