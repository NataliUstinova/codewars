const firstNonRepeatingLetter = (s) => {
  let charCount = new Map();
  let lowerCaseStr = s.toLowerCase();

  // Step 1: Count occurrences of each character (case insensitive)
  for (let char of lowerCaseStr) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  // Step 2: Find the first non-repeating character
  for (let i = 0; i < s.length; i++) {
    if (charCount.get(lowerCaseStr[i]) === 1) {
      return s[i]; // Return the character in its original case
    }
  }

  return ""; // No unique character found
}

export default firstNonRepeatingLetter