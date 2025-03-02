var intToRoman = function(num) {
  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const symbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

  let result = "";

  for (let i = 0; i < values.length; i++) {
    while (num >= values[i]) {
      num -= values[i];
      result += symbols[i];
    }
  }

  return result;
};

//Время работы: решение работает за O(1) по времени, потому что количество элементов в массиве values фиксировано (13 элементов), и в худшем случае мы проходим по всем этим элементам. Каждое уменьшение числа (num -= values[i]) происходит за постоянное время, так что общее время работы ограничено количеством операций вычитания.
// Память: решение использует всего два массива фиксированной длины (13 элементов каждый), а также строку для хранения результата, которая будет содержать римские символы. Таким образом, память используется очень эффективно.



var intToRoman2 = function(num) {
  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const symbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

  let result = "";

  for (let i = 0; i < values.length; i++) {
    // Используем деление, чтобы посчитать, сколько раз можно вычесть текущий элемент
    let count = Math.floor(num / values[i]);
    // Добавляем символы соответствующее количеству повторений
    result += symbols[i].repeat(count);
    // Уменьшаем число на соответствующую величину
    num -= values[i] * count;
  }

  return result;
};



function solution(roman){
  var conversion = {M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1};

  return roman.match(/CM|CD|XC|XL|IX|IV|\w/g).reduce((accum, roman) => accum + conversion[roman], 0);
}

class RomanNumerals {
  static values = [
    { value: 1000, symbol: "M" }, { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" }, { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" }, { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" }, { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" }, { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" }, { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" }
  ];

  static romanMap = {
    'I': 1, 'V': 5, 'X': 10, 'L': 50,
    'C': 100, 'D': 500, 'M': 1000
  };

  // Преобразование числа в римское
  static toRoman(num) {
    let result = "";

    for (const { value, symbol } of RomanNumerals.values) {
      let count = Math.floor(num / value);
      result += symbol.repeat(count);
      num %= value;
    }

    return result;
  }

  // Преобразование римского числа в обычное
  static fromRoman(str) {
    let result = 0;

    for (let i = 0; i < str.length; i++) {
      let currentValue = RomanNumerals.romanMap[str[i]];
      let nextValue = RomanNumerals.romanMap[str[i + 1]] || 0;

      if (currentValue < nextValue) {
        result -= currentValue;
      } else {
        result += currentValue;
      }
    }

    return result;
  }
}
