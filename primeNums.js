const closestPrimes = function(left, right) {
  let ans = [];
  for (let i = 2; i < right; i++) {
    for (let j = i*i; j < right; j +=i) {
      ans.push(j)
    }
  }
  return ans;
};

console.log(closestPrimes(10, 19))

function primeInRange(n1, n2) {
  if (n2 < 2) return []; // Нет простых чисел в этом диапазоне
  if (n1 < 2) n1 = 2;    // Простые числа начинаются с 2

  let primes = new Array(n2 - n1 + 1).fill(true); // Отмечаем все числа как простые

  // Находим все простые числа до sqrt(n2)
  let sqrtN2 = Math.sqrt(n2);
  let smallPrimes = sieveOfEratosthenes(Math.floor(sqrtN2));

  // Убираем кратные найденных простых в диапазоне [n1, n2]
  for (let prime of smallPrimes) {
    let start = Math.max(prime * prime, Math.ceil(n1 / prime) * prime);
    for (let j = start; j <= n2; j += prime) {
      primes[j - n1] = false;
    }
  }

  // Собираем оставшиеся простые числа
  return primes.map((isPrime, index) => isPrime ? index + n1 : null).filter(num => num !== null);
}

// Решето Эратосфена для поиска простых до sqrt(n2)
function sieveOfEratosthenes(limit) {
  let isPrime = new Array(limit + 1).fill(true);
  isPrime[0] = isPrime[1] = false;

  for (let i = 2; i * i < limit; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j < limit; j += i) {
        isPrime[j] = false;
      }
    }
  }

  return isPrime.map((isPrime, index) => isPrime ? index : null).filter(num => num !== null);
}

// console.log(primeInRange(10, 19));
// // [11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]