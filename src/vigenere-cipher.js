const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(direct=true) {
    this.direct = direct;
  }
  //Эти параметры для обоих методов являются обязательными . Если хотя бы один из них не был дан, Errorнеобходимо бросить. 
  encrypt(message, key) {//Метод принимает 2 параметра: message( stringдля кодирования) и key( string-ключевое слово).
    if (!(message && key )) throw new Error('Error');
    let letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    message = message.toUpperCase().split('');
    key = key.toUpperCase().split(''); 
   // let keyLength = key.length-1; 
    let keyPosition = 0; 
    for (let i=0; i < message.length; i++){
      let messInd = letters.indexOf(message[i]);
      if (messInd !== -1) {
        let keyInd = letters.indexOf(key[keyPosition]);
        let kripto = messInd + keyInd > 25 ? messInd + keyInd - 26 : messInd + keyInd;
        message[i] = letters[kripto];
        keyPosition = keyPosition === key.length-1 ? 0 :  keyPosition + 1;
      } else {
        message[i] = message[i];
      }
    }
    message = this.direct ? message : message.reverse();
    message = message.join('');
    return message;
  }    
 // encrypt('attack at dawn!','alphonse');


  decrypt(encryptedMessage, key) { //Метод принимает 2 параметра: encryptedMessage( stringдля декодирования) и key( string-ключевое слово).
    if (!(encryptedMessage && key )) throw new Error('Error');
    let letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    encryptedMessage = encryptedMessage.toUpperCase().split('');
    key = key.toUpperCase().split(''); 
    //let keyLength = key.length-1; 
    let keyPosition = 0; 
    for (let i=0; i < encryptedMessage.length; i++){
      let messInd = letters.indexOf(encryptedMessage[i]);
      if (messInd !== -1) {
      let keyInd = letters.indexOf(key[keyPosition]);
      let kripto = messInd - keyInd < 0 ? messInd + 26 - keyInd : messInd - keyInd;
      encryptedMessage[i] = letters[kripto];
      keyPosition = keyPosition === key.length-1 ? 0 :  keyPosition + 1;
      } else {
        encryptedMessage[i] = encryptedMessage[i];
      }
    }
    encryptedMessage = this.direct ? encryptedMessage : encryptedMessage.reverse();
    encryptedMessage = encryptedMessage.join('');
    return encryptedMessage;

  }

}

module.exports = VigenereCipheringMachine;
