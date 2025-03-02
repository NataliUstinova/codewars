const twoSum = function(nums, target) {
  let map = new Map;
  
  for (let i=0; i < nums.length; i++) {
    let compliment = target - nums[i];
    map.set(nums[i], i)
    if (map.has(compliment)) {
      return [map.get(compliment), i]
    }
  }
  return []
};

console.log(twoSum([2,7,11,15], 9))