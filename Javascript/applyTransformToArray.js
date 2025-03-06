const map = function(fn, arr) {
  let res = [];
  // for (let item of arr) {
  //   let localRes = fn(item)
  //   console.log(item)
  //   res.push(localRes)
  // }
  for (let i = 0; i < arr.length; i++) {
    res.push(fn(arr[i]))
  }
  return res;
};


const fn = function plusone(n) { return n + 1; }
const arr = [1,2,3,66,5]

console.log(map(fn, arr))