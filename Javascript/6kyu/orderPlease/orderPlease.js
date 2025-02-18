function order(words){
  let wordsMap = new Map;
  words
    .split(' ')
    .forEach(word => {
      wordsMap.set(word, +word.match(/\d+/))
    })
  return [...wordsMap]
    .sort((a,b) => a[1] - b[1])
    .map(word => word[0])
    .join(' ');
}
//map не надо использовать

function order2(words) {
  return words
    .split(' ')
    .sort((a, b) => a.match(/\d+/) - b.match(/\d+/))
    .join(' '); 
}

function order3(words){
  return words
    .split(' ')
    .reduce((acc, word) => {
      acc[+word.match(/\d/) - 1] = word; //put word in an array according to the necessary index
      return acc; //return acc so it changes in the next iteration
    }, [])
    .join(' ');
}

//3rd option is more effective as it doesn't use map and sort which are slow.
//it puts the words in the correct order in the array and then joins them.

console.log(order2("is2 Thi1s T4est 3a")) // "Thi1s is2 3a T4est"