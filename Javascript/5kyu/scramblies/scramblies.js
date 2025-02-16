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
//12.934s
// O(n + m) Complexity:
// n = length of str1 (building frequency map).
// m = length of str2 (checking characters).
// Uses a single pass for counting & another for checking (instead of nested loops).
// Early exit if a character is missing avoids unnecessary checks.


//better performance solution 11.676s
const scramble2 = (str1, str2) => {
  let charCount = new Array(26).fill(0);
  
  for (let char of str1) {
    charCount[char.charCodeAt(0) - 97]++
  }

  // Check if str2 can be formed
  return str2.split("").every((char) => --charCount[char.charCodeAt(0) - 97] >= 0);
}


export { scramble, scramble2 };