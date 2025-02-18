const countBits = function(n) {
  return n.toString(2).split('').reduce((acc, bit) => acc + +bit, 0)
};

//можно улучшить по производительности, так как строковые операции (toString, split, reduce) могут быть медленнее, чем побитовые операции.

const countBits2 = function(n) {
  return n.toString(2).split('0').join('').length;
};
const countBits3 = n => (n.toString(2).match(/1/g) || []).length;
//медленнее чем reduce

const countBits4 = n => {
  let count = 0;
  while (n > 0) {
    count += n & 1; // Проверяем последний бит
    n >>= 1; // Сдвигаем число вправо
  }
  return count;
};
//n & 1 проверяет, установлен ли последний бит (если 1, то увеличиваем count).
// n >>= 1 сдвигает число вправо, удаляя последний бит.
// Повторяем процесс, пока n не станет 0.
//Быстрее, чем преобразование в строку (работает за O(log n)).

const countBits5 = n => {
  let count = 0;
  while (n) {
    n &= n - 1; // Убираем младший бит, равный 1
    count++;
  }
  return count;
};
//Метод Брайана Кернигана (O(k), где k — число 1 в числе)
//самый быстрый способ


console.log(countBits2(1234)) // 0