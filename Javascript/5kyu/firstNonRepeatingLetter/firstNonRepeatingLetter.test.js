import firstNonRepeatingLetter from './firstNonRepeatingLetter';

describe('Testing firstNonRepeatingLetter', () => {
  const doTest = (s, expected) => {
    test(`Input: '${s}' → Expected Output: '${expected}'`, () => {
      expect(firstNonRepeatingLetter(s)).toBe(expected);
    });
  };

  describe('Fixed tests', () => {
    describe('Basic tests', () => {
      doTest('a', 'a');
      doTest('stress', 't');
      doTest('moonmen', 'e');
      doTest('sTreSS', 'T'); // Case sensitivity test
      doTest('abba', ''); // No unique characters
      doTest('abcdef', 'a'); // All unique, return first
    });

    describe('Edge cases', () => {
      doTest('', ''); // Empty string
      doTest('aa', ''); // Only repeating characters
      doTest('aA', ''); // Case insensitive match, both repeat
      doTest('abcdabcdfe', 'f'); // Last unique character
      doTest('b', 'b'); // Single character
      doTest('abcdABC', 'd'); // Mixed case with first non-repeating in lowercase
      doTest('zzzZZz', ''); // All characters repeat, even with different cases
    });
  });
});
