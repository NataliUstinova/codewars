function sortByLength(arr) {
  //to lowerCase()
  return arr.sort((a,b) => a.toLowerCase().length - b.toLowerCase().length)
}

console.log(sortByLength(["abc", "", "aaa", "a", "zz"]))