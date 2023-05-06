const palindromes = function(phrase) {
  const regEx = /[^A-Za-z0-9]/g;
  phrase = phrase.toLowerCase().replace(regEx, '');
  let len = phrase.length;

  for (let i = 0; i < len / 2; i++) {
    if (phrase[i] !== phrase[len - 1 - i]) {
      return false;
    }
  }
  return true;

}
// Do not edit below this line
module.exports = palindromes;
