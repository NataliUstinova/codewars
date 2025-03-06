function elimination(arr){
  let set = new Set();
  for (let i of arr) {
    if (set.has(i)) {
      return i
    }
    set.add(i)
  }
  if (set.size === arr.length) {
    return null
  }
}

function elimination2(arr){
  for(let el of arr){
    if(arr.indexOf(el) !== arr.lastIndexOf(el)) return el
  }
  return null
}

function elimination3(arr){
  return arr.find(x=>arr.indexOf(x)!==arr.lastIndexOf(x))??null;
}

console.log(elimination3([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])) // null
console.log(elimination3([1,2,15,15])) // [15, 15]