function maxAdjacentDifference(inputArr) {
  let maxDifference = 0
  
  for (let i = 0; i < inputArr.length - 1; i++) {
    const absoluteDifference = Math.abs(inputArr[i] - inputArr[i+1])
    
    if (maxDifference < absoluteDifference) {
      maxDifference = absoluteDifference; 
    }
  }
  
  return maxDifference
}

console.log(maxAdjacentDifference([2,4,1,0]))