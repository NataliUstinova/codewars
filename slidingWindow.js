const countOfSubstrings = function(word, k) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const substringLength = vowels.length + k;
  let start = 0
  let end = substringLength

  for (let i= 0; i < word.length; i++) {
    let substring = word.slice(i, i+substringLength)
    for (let j in vowels) {
      if ([...substring].includes(vowels[j])) {
        
      }
      console.log([...substring].includes(vowels[j]))
    }
  }

};

console.log(countOfSubstrings("aeioqq", 1))