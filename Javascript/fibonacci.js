function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n-2) + fibonacci(n-1);
}
//это очень неэффективно, потому что каждый вызов создает два новых вызова, 
// что приводит к экспоненциальной сложности O(2^n)
console.log(fibonacci(10))

//Ниже сложность O(n), потому что каждое число считается только один раз и запоминается.
function fibonacciMemo(n, memo = {}) {
  if (n <= 1) return n;
  if (memo[n]) return memo[n]; // Проверяем, посчитано ли уже
  return memo[n] = fibonacciMemo(n-2, memo) + fibonacciMemo(n-1, memo);
}
console.log(fibonacciMemo(10))

//Линейный по времени O(n) и O(1) по памяти:
function fib(num, current = 0, next = 1) {
  if (num === 0)
    return current;

  return fib(--num, next, current + next);
}

console.log("fib", fib(10))

function sumOddFibonacciNumbers(n) {
  let sum = 0;
  let previous = 0;
  let current = 1;
  
  while (current <= n)  {
    if (current % 2 === 1) {
      sum += current 
    }
    
    previous = current;
    current = current + previous;
  }
  return sum;
}

console.log(sumOddFibonacciNumbers(10))