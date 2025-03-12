function insertDashes(str) {
  const words = str.split(' ')
  
  const dashedWords = words.map(word => {
    const chars = word.split('')
    return chars.join('-')
  })
  
  return dashedWords.join(' ')
}

console.log(insertDashes("aba caba"))