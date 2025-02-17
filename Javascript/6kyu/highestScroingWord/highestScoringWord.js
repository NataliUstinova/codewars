function high(x){
  let wordScores = new Map;

  x.split(' ').map(word => {
    let wordScore = 0
    word.split('').map(char => {
      wordScore = wordScore + (char.charCodeAt(0) - 96);
    })
    wordScores.set(word, wordScore)
  })
    
  let sortedWordsArray = [...wordScores].sort((a,b) => b[1] - a[1]);
  
  return sortedWordsArray[0][0]
}

console.log(high('man i need a taxi up to ubud'))
