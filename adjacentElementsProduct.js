function adjacentElementsProduct(nums) {
  let largest = nums[0] * nums[1]
  
  for (let i = 1; i < nums.length; i++) {
    const adjacentProduct = nums[i] * nums[i + 1]
    if (largest < adjacentProduct) {
      largest = adjacentProduct;
    }
    // largest = largest < adjacentProduct ? adjacentProduct : largest;
  }
  return largest
}

console.log(adjacentElementsProduct([3,6,-2,-5,7,3]))