const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options ) {
  let out = [], addOut = [], resOut = [];
  str = String(str);
  let separ = !options.separator ? '+': options.separator;
  let repTime = !options.repeatTimes ? 1 : options.repeatTimes;
  
  out.push(str); // out=['STRING'];

  if (options.addition !== undefined){
    let addStr = String(options.addition);
    let addSepar = !options.additionSeparator ? '|': options.additionSeparator;
    let repAddTime = !options.additionRepeatTimes ? 1 : options.additionRepeatTimes; 

    let i = 0;
    do {
      addOut.push(addStr);
      i++;
    } while (i<repAddTime);
    addOut = addOut.join(`${addSepar}`);
    out.push(addOut);             //out = ['STRING', 'PLUS00PLUS00PLUS']
  }

  out = out.join(''); // out = STRINGPLUS00PLUS00PLUS // out = STRING  
  
  let j = 0;
  do {
    resOut.push(out);
    j++;
  } while (j<repTime);

  resOut = resOut.join(`${separ}`);
  return resOut;
   // = str + optStr.repeat(repAddTime)
};
  