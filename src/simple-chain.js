const CustomError = require("../extensions/custom-error");
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (value === null) {
      this.chain.push("( null )");
    } else {
      value = value.toString().replace('function ', 'function');
      this.chain.push(`( ${value} )`);
    }
    return this;
  },
  removeLink(position) {
    if (Number.isInteger(position) && position < this.chain.length) {
      this.chain = this.chain.filter(
        (item, index, array) => index !== position - 1
      );
      return this;
    } else {
      this.chain = [];
      throw new Error("Not implemented");
    }
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
  
    let curChain = this.chain.join("~~");
    this.chain = [];
    return curChain;
  },
};
module.exports = chainMaker;
//
