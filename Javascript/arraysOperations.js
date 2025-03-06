var applyOperations = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      nums[i] *= 2;
      nums[i + 1] = 0;
    }
  }
  const zerosArr = nums.filter(i => i === 0);
  return nums.filter(i => i !== 0).concat(zerosArr);
};

var filter = function(arr, fn) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    let value = fn(arr[i], i);
    if (value) {
      res.push(value);
    }
  }
  return res;
};

const findMissingAndRepeatedValues = function(grid) {
  let res = grid.flat()
  let y = res.find(j => res.indexOf(j) !== res.lastIndexOf(j));
  
  // let desiredArr =[];
  // for (let i = 1; i < (grid.length*grid.length + 1); i++) {
  //   desiredArr.push(i)
  // }
  // let desiredSum = desiredArr.reduce((acc, num) => acc + num, 0)
  // desiredSum = (n^2(n^2+1))/2    --- сумма первых натуральных чисел
  let desiredSum = (grid.length * grid.length*(grid.length * grid.length + 1)/2)
  
  let sum = res.reduce((acc, num) => acc + num, 0);
  let x = desiredSum - sum + y;
  return [y, x];
};

//x = missing number. y = repeated number
// 
// Sum equation:
// Sum_actual - Sum_expected = y - x
// 
// Sum of squares equation :
// sum_actual_square - sum_expected_square = y^2 - x^2 = (y - x)(y + x)
// 
// Try to derive the values of x & y from above 2 equations.

// function plusOne(n) { return n + 1 }
// console.log(filter([1,2,2,1,1,0], plusOne))
// console.log(findMissingAndRepeatedValues([[1,3],[2,2]]))
// console.log(findMissingAndRepeatedValues([[9,1,7],[8,9,2],[3,4,6]]))



// var kthSmallest = function(matrix, k) {
//   return matrix.flat().sort((a,b) => a - b)[k-1];
// };

// time O(n^² log n) , memory O(n^²) --- not effective


//using binary search
function kthSmallest(matrix, k) {
  let n = matrix.length;
  let low = matrix[0][0], high = matrix[n - 1][n - 1];

  while (low < high) {
    let mid = Math.floor((low + high) / 2);
    let count = countLessOrEqual(matrix, mid);

    if (count < k) {
      low = mid + 1;  // We need more elements
    } else {
      high = mid;  // The answer might be `mid`
    }
  }

  return low;
}

// Helper function to count numbers ≤ target in matrix
function countLessOrEqual(matrix, target) {
  let n = matrix.length;
  let count = 0, row = n - 1, col = 0;

  while (row >= 0 && col < n) {
    if (matrix[row][col] <= target) {
      count += row + 1; // Add all numbers in this column
      col++;
    } else {
      row--;
    }
  }

  return count;
}


console.log(kthSmallest([[1,5,9],[10,11,13],[12,13,15]], 8))