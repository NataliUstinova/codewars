const twoSum = function(nums, target) {
  let map = new Map;
  
  for (let i= 0; i < nums.length; i++) {
    let compliment = target - nums[i];
    map.set(nums[i], i)
    if (map.has(compliment)) {
      return [map.get(compliment), i]
    }
  }
  return []
};

//SUM OF 2
function sumOfTwo(nums1, nums2, value) {
  //object faster search by key than arr
  const mapObj = {};
  
  for (let num of nums1) {
    const difference = value - num;
    mapObj[difference] = difference
  }
  
  for (let num of nums2) {
    if (mapObj.hasOwnProperty(num)) {
      return true;
    }
  }
  
  return false;
}


// console.log(twoSum([2,7,11,15], 9))
console.log(sumOfTwo([1,2,3], [10,20,30,40], 42))