const high = (x) => {
  let words = x.split(' ');
  let maxScore = 0;
  let bestWord = '';

  words.forEach(word => {
    let score = [...word].reduce((sum, char) => sum + (char.charCodeAt(0) - 96), 0);
    if (score > maxScore) {
      maxScore = score;
      bestWord = word;
    }
  });

  return bestWord;
}

export default high;