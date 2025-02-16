const scramble = (str1, str2) => {
  let charCount = new Map;
  // Count occurrences of each character in str1
  for (let char of str1) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }
  // Check if str2 can be formed
  for (let char of str2) {
    if (!charCount.has(char) || charCount.get(char) === 0) {
      return false;
    }
    charCount.set(char, charCount.get(char) - 1);
  }
  return true;
}

export default scramble;