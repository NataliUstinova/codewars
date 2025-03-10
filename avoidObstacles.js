function avoidObstacles(arr) {
  const largestNum = arr.sort()[arr.length - 1]
  for (let i = 1; i <= largestNum + 1; i++) {
    if (arr.every(value => value % i !== 0)) {
      return i;
    }
  }
}

console.log(avoidObstacles([5,3,6,7,9]))

function defer(f, ms) {
  return function() {
    setTimeout(() => f.apply(this, arguments), ms)
  };
}

function sayHi(who) {
  alert('Hello, ' + who);
}

let sayHiDeferred = defer(sayHi, 2000);
sayHiDeferred("John"); // выводит "Hello, John" через 2 секунды

function defer2(f, ms) {
  return function(...args) {
    let ctx = this;
    setTimeout(function() {
      return f.apply(ctx, args);
    }, ms);
  };
}
