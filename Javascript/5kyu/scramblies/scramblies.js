const scramble = (str1, str2) => {
  let charCount = new Map;
  // Count occurrences of each character in str1
  for (let char of str1) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }
  // Check if str2 can be formed
  for (let char of str2) {
    if (!charCount.has(char) || charCount.get(char) === 0) {
      return false;
    }
    charCount.set(char, charCount.get(char) - 1);
  }
  return true;
}
//12.934s
// O(n + m) Complexity:
// n = length of str1 (building frequency map).
// m = length of str2 (checking characters).
// Uses a single pass for counting & another for checking (instead of nested loops).
// Early exit if a character is missing avoids unnecessary checks.


//better performance solution 11.676s
const scramble2 = (str1, str2) => {
  let charCount = new Array(26).fill(0);
  
  for (let char of str1) {
    charCount[char.charCodeAt(0) - 97]++
  }

  // Check if str2 can be formed
  return [...str2].every((char) => --charCount[char.charCodeAt(0) - 97] >= 0);
}

// [...str2] Преобразует строку str2 в массив символов.
// 
// Метод .every((char) => { ... })
// Метод every проходит по каждому символу в str2 и выполняет переданную функцию.
// Если все элементы массива проходят проверку (функция возвращает true для всех), every возвращает true.
// Если хотя бы один элемент не проходит проверку (функция вернула false), every сразу же останавливается и возвращает false.
// 
// Что делает char.charCodeAt(0) - 97?
// charCodeAt(0) получает числовой код символа в таблице ASCII/Unicode.
// В английском алфавите:
// 'a'.charCodeAt(0) → 97
// 'z'.charCodeAt(0) → 122

// Вычитая 97, мы приводим к индексу в массиве длиной 26 (0-25), где каждая буква занимает свое место:
// Это позволяет нам хранить количество каждой буквы в charCount[26] вместо Map или Object.
// 
// Что делает --charCount[...] >= 0?
// --charCount[index] уменьшает количество данной буквы (использует ее).
// >= 0 проверяет, не ушло ли количество букв в отрицательные значения.
// Если хотя бы один символ отсутствует (его счетчик charCount становится -1), every немедленно остановится и вернет false.
// 
// работает за O(n), что быстрее, чем использование Map или Object.


export { scramble, scramble2 };