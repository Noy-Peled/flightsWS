// checks if string in uppercase,if true returns it else convert the string
function toUpperCase(str) {
    if (str === str.toUpperCase()) {
      return str;
    } else {
      return str.toUpperCase();
    }
  }

  module.exports={ toUpperCase }