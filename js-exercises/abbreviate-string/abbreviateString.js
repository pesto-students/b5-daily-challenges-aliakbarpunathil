/* eslint-disable */
function abbreviateString(str) {
  if (typeof str !== 'string') {
    throw 'Invalid Input';
  }
  let splittedString = str.split(' ');
  return splittedString[0] + ' ' + splittedString[splittedString.length - 1].charAt(0).toUpperCase() + '.';
}

export { abbreviateString };
