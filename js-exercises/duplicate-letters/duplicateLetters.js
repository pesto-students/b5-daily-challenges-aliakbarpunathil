function duplicateLetters(inputString) {
  const letterCount = {};
  for (const letter of inputString) {
    letterCount[letter] = letterCount[letter] || 0;
    letterCount[letter] += 1;
  }
  if (Math.max(...Object.values(letterCount)) === 1) {
    return false;
  }
  return Math.max(...Object.values(letterCount));
}

export {
  duplicateLetters,
};
