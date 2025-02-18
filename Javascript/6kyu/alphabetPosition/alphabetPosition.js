/*
In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
Input = "The sunset sets at twelve o' clock."
Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"

my solution is function alphabetPosition(text) {
  return [...text.toLowerCase().replace(/\W+/g, '')].map(char => char.charCodeAt(0) - 96)
    .join(' ')
}
*/
function alphabetPosition(text) {
  return [...text.toLowerCase().replace(/[^a-z]/g, '')]
    .map(char => char.charCodeAt(0) - 96)
    .join(' ');
}

function alphabetPosition2(text) {
  return text.toLowerCase()
    .split('') // разбиваем строку на массив символов
    .filter(char => char >= 'a' && char <= 'z') // фильтруем только буквы
    .map(char => char.charCodeAt(0) - 96) // преобразуем в номер буквы
    .join(' ');
}

function alphabetPosition3(text) {
  let result = '';
  for (let char of text.toLowerCase()) {
    let code = char.charCodeAt(0);
    if (code >= 97 && code <= 122) { // диапазон a-z
      result += (code - 96) + ' ';
    }
  }
  return result.trim(); // убираем лишний пробел в конце
}

//Преимущества №3:
// 
// Работает быстрее, так как не создаёт временные массивы.
// Экономит память, так как не использует .map() и .join().

console.log(alphabetPosition("t T a z, hi i love' js"))