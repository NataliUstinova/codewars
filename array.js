var map = function(arr, fn) {
  let res=[];
  for (let i in arr) {
    res.push(fn(Number(i)));
  }
  return res;
};

const fn = function plusone(n) { return n + 1; }

const arr = [1,2,3]

console.log(map(arr, fn))