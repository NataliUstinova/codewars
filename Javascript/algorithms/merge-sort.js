import times from 'lodash/times.js';

let defaultCompare = (a, b) =>
  a > b ? 1 : (a < b ? -1 : 0);

let mergesort = (
  array,
  start = 0,
  end = array.length,
  compare = defaultCompare
) => {
  let length = end - start;
  if (length <= 1) { return array.slice(start, end); }

  // Divide
  let pivot = Math.floor(length / 2);

  // Conquer
  let left = mergesort(array, start, start + pivot, compare);
  let right = mergesort(array, start + pivot, end, compare);

  // Combine
  let sorted = [];
  let i = 0, j = 0;
  for (let k = 0; k < length; k++) {
    if (i < left.length && compare(left[i], right[j]) <= 0) {
      sorted.push(left[i]);
      i++;
    } else {
      sorted.push(right[j]);
      j++;
    }
  }

  return sorted;
};

//extra coping bad performance
let mergesortArraySplit = (
  array,
  compare = defaultCompare
) => {
  if (array.length <= 1) { return array; }

  // Divide
  let pivot = Math.floor(array.length / 2);

  // Conquer
  let left = mergesortArraySplit(array.slice(0, pivot), compare);
  let right = mergesortArraySplit(array.slice(pivot, array.length), compare);

  // Combine
  let sorted = [];
  let i = 0, j = 0;
  for (let k = 0; k < array.length; k++) {
    if (i < left.length && compare(left[i], right[j]) <= 0) {
      sorted.push(left[i]);
      i++;
    } else {
      sorted.push(right[j]);
      j++;
    }
  }

  return sorted;
};

//With Array view performance is better
let ArrayView = (
  array,
  start = 0,
  end = array.length,
) => ({
  start,
  length: end - start,
  toArray: () => array.slice(start, end),
  slice: (dStart, dEnd) =>
    ArrayView(array, start + dStart, start + dEnd),
  get: (index) => {
    let realIndex = start + index;
    return realIndex < end && realIndex >= start
      ? array[realIndex]
      : undefined
      ;
  },
});

let mergesortArrayViewSplit = (
  array,
  compare = defaultCompare
) => {
  if (array.length <= 1) { return array.toArray(); }

  // Divide
  let pivot = Math.floor(array.length / 2);

  // Conquer
  let left = mergesortArraySplit(array.slice(0, pivot), compare);
  let right = mergesortArraySplit(array.slice(pivot, array.length), compare);

  // Combine
  let sorted = [];
  let i = 0, j = 0;
  for (let k = 0; k < array.length; k++) {
    if (i < left.length && compare(left[i], right[j]) <= 0) {
      sorted.push(left[i]);
      i++;
    } else {
      sorted.push(right[j]);
      j++;
    }
  }

  return sorted;
};
let mergesortArraySplitAndView = (array, ...args) =>
  mergesortArrayViewSplit(ArrayView(array), ...args);

//not efficient because of shift every time, shift is unessessary
let mergesortWithQueue = (
  array,
  compare = defaultCompare
) => {
  if (array.length <= 1) { return array; }

  // Divide
  let pivot = Math.floor(array.length / 2);

  // Conquer
  let left = mergesortWithQueue(array.slice(0, pivot), compare);
  let right = mergesortWithQueue(array.slice(pivot, array.length), compare);

  // Combine
  return array.map(() =>
    left.length > 0 && compare(left[0], right[0]) <= 0
      ? left.shift()
      : right.shift()
  );
};

let Cursor = (
  array,
  pointer = 0,
) => ({
  shift: () => array[pointer++],
  peek: () => array[pointer],
  length: () => array.length - pointer,
});


//improved performance, but not as in array view
let mergesortWithCursor = (
  array,
  compare = defaultCompare
) => {
  if (array.length <= 1) { return array; }

  // Divide
  let pivot = Math.floor(array.length / 2);

  // Conquer
  let left = Cursor(mergesortWithCursor(array.slice(0, pivot), compare));
  let right = Cursor(mergesortWithCursor(array.slice(pivot, array.length), compare));

  // Combine
  return array.map(() =>
    left.length() > 0 && compare(left.peek(), right.peek()) <= 0
      ? left.shift()
      : right.shift()
  );
};

let mergesortWithCursor2 = (
  array,
  compare = defaultCompare
) => {
  if (array.length <= 1) { return array.toArray(); }

  // Divide
  let pivot = Math.floor(array.length / 2);

  // Conquer
  let left = Cursor(mergesortWithCursor2(array.slice(0, pivot), compare));
  let right = Cursor(mergesortWithCursor2(array.slice(pivot, array.length), compare));

  // Combine
  return times(array.length, () =>
    left.length() > 0 && compare(left.peek(), right.peek()) <= 0
      ? left.shift()
      : right.shift()
  );
};

let mergesortWithCursorAndArrayView = (array, ...args) =>
  mergesortWithCursor2(ArrayView(array), ...args);


// Simple split in 3 smaller functions
let split = (
  array,
  pivot = Math.floor(array.length / 2)
) => [
  array.slice(0, pivot),
  array.slice(pivot, array.length)
];

let merge = (left, right, compare) => {
  left = Cursor(left);
  right = Cursor(right);
  return times(left.length() + right.length(), () =>
    left.length() > 0 && compare(left.peek(), right.peek()) <= 0
      ? left.shift()
      : right.shift()
  );
};

let mergesortSimple = (
  array,
  compare = defaultCompare
) => {
  if (array.length <= 1) { return array.toArray(); };

  let [ left, right ] = split(array);

  return merge(
    mergesortSimple(left, compare),
    mergesortSimple(right, compare),
    compare
  );
};

let mergesortSimpleWithArrayView = (array, ...args) =>
  mergesortSimple(ArrayView(array), ...args);

export default mergesortSimpleWithArrayView;