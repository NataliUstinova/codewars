let defaultCompare = (a, b) =>
  a > b ? 1 : (a < b ? -1 : 0);

/* Version 1:
    O(n)
    Fixed memory
    Loops
*/
const binarySearchWithLoops = (array, element, compare = defaultCompare) => {
  let left = 0;
  let right = array.length - 1
  
  while(left <= right) {
    let middleIndex = Math.floor((right+left)/2);
    switch (compare(element, array[middleIndex])) {
      case -1: {
        right = middleIndex - 1;
        break;
      }
      case 1: {
        left = middleIndex + 1
        break;
      }
      default: {
        return middleIndex
      }
    }
  }
  return -1;
};

const binarySearchWithRecursion = (array, element, compare = defaultCompare, left=0, right = array.length - 1) => {
  if (left > right) { return -1 }
  const middle = Math.floor((right+left)/2)
  const comparison = compare(element, array[middle])
  
  return (
  comparison === -1 ?
    binarySearchWithRecursion(array, element, defaultCompare, left, middle - 1)
  : comparison === 1 ? 
    binarySearchWithRecursion(array, element, defaultCompare, middle+1, right)
  : middle
  )
};

const binarySearchWithTailRecursion = (array, element, compare = defaultCompare, left=0, right = array.length - 1) => {
  if (left > right) { return -1 }
  
  const middle = Math.floor((right+left)/2)
  const comparison = compare(element, array[middle])
  
  if (comparison === 0) { return middle }
  
  const newBounds = comparison === -1
    ? [left, middle - 1]
    : [middle + 1, right]
    
  
  return binarySearchWithLoops(array, element, compare, ...newBounds)
};

//Heavy memory usage, each slice creating a copy of an array
const binarySearchWithArraySplitting = (array, element, compare = defaultCompare) => {
  if (array.length === 0) { return -1 }

  const middle = Math.floor(array.length/2)
  const comparison = compare(element, array[middle])

  if (comparison === 0) { return middle }

  const [left, right] = comparison === -1
    ? [0, middle - 1]
    : [middle + 1, array.length]
  
  const subIndex = binarySearchWithArraySplitting(array.slice(left, right), element)
  return subIndex === -1 ? -1 : left + subIndex;
};

//Split with Array view 
let binarySearchWithArraySplitting2 = (array, element, compare = defaultCompare) => {
  if (array.length === 0) { return -1; }
  const middle = Math.floor(array.length / 2);
  const comparison = compare(element, array.get(middle));

  if (comparison === 0) { return middle; }

  const [left, right] = comparison === -1
    ? [0, middle - 1]
    : [middle + 1, array.length];

  const subIndex = binarySearchWithArraySplitting(array.slice(left, right), element, compare);

  return subIndex === -1
    ? -1
    : left + subIndex;
};

export let ArrayView = (
  array,
  start = 0,
  end = array.length,
) => ({
  length: end - start,
  toArray: () => array.slice(start, end),
  slice: (dStart, dEnd) => ArrayView(array, start + dStart, start + dEnd),
  get: (index) => {
    let realIndex = start + index;
    return realIndex < end && realIndex >= start
      ? array[realIndex]
      : undefined
      ;
  },
});

let binarySearchWithArrayView = (array, ...args) =>
  binarySearchWithArraySplitting2(ArrayView(array), ...args)

//array partition
let ArrayPartition = (
  array,
  pivot,
) => ({
  left: () => array.slice(0, pivot),
  middle: () => array.get(pivot),
  right: () => array.slice(pivot + 1, array.length),
});

let binarySearchWithPartition = (array, element, compare = defaultCompare) => {
  if (array.length === 0) { return -1; }
  const middle = Math.floor(array.length / 2);
  const part = ArrayPartition(array, middle);
  const comparison = compare(element, part.middle());

  return comparison === 0
    ? array.start + middle
    : binarySearchWithPartition(
      comparison === -1 ? part.left() : part.right()
      , element, compare);
};

let binarySearchWithPartitionAndView = (array, ...args) =>
  binarySearchWithPartition(ArrayView(array), ...args);


console.log(binarySearchWithPartitionAndView([], 2), -1);
console.log(binarySearchWithPartitionAndView([1], 1), 0);
console.log(binarySearchWithPartitionAndView([1], 2), -1);
console.log(binarySearchWithPartitionAndView([1,2,3], 2), 1);
console.log(binarySearchWithPartitionAndView([1,2,3], 3), 2);
console.log(binarySearchWithPartitionAndView([1,2,3], 4), -1);
console.log(binarySearchWithPartitionAndView([1,2,3,7], 3), 2);