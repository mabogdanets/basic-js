const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members)) return false; 
  let out= [] , current;

  for(let i = 0; i<members.length; i++){
    current = members[i];
    if (typeof current !== "string") continue;
    out.push(current.trim().slice(0, 1).toUpperCase()); 
  }
  out = out.sort().join('');
  return out ? out : false;

};
