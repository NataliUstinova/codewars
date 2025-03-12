function extractEachK(input, k) {
  // return input.filter(el => (input.indexOf(el)+1) % k !== 0)
  return input.filter((_, i) => (i+1) % k !== 0)
}

console.log(extractEachK([1,2,3,4,5,6,7,8,9], 3))



