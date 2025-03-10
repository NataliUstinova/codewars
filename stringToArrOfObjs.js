function wordsToObject(input) {
  let arr = input.split(" ")
  let res = []
  for (let i= 0; i < arr.length; i+=2) {
    res.push({
      name: arr[i],
      id: arr[i + 1]
    })
  }
  return `${res}`  
}

console.log(wordsToObject("red 1 yellow 2 black 3 white 4"))