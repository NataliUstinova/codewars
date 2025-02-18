function duplicateCount(text){
  let counts = text
                        .toLowerCase()
                        .split('')
                        .reduce((acc,char) => {
                          acc[char] = acc[char] ? ++acc[char] : 1;
                          return acc;
                        }, [])
  return Object.values(counts).filter(count => count > 1).length;
}

function duplicateCount2(text){
  let counts = new Map;
  
  text
    .toLowerCase()
    .split('')
    .forEach(char => {
      counts.set(char, counts.get(char) ? counts.get(char) + 1 : 1)
    })
  return [...counts.values()].filter(count => count > 1).length
}

function duplicateCount3(text){
  return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
}
//([^]) → Захватывает любой символ (букву или цифру).
// \1+ → Ищет повторяющиеся вхождения того же символа (группа \1 обозначает тот же символ, который был захвачен ([^]), а + означает "повторяется один или более раз").
// g → Флаг "глобального поиска", чтобы находить все совпадения в строке.

//Плюсы: ✅ Очень короткий и читаемый код.
// ✅ Не требует дополнительных структур (Map или {}), работает только со строками.
// ✅ Регулярные выражения эффективно находят повторы.
// 
// Минусы: ❌ Работает медленнее, чем Map, из-за sort().

console.log(duplicateCount2('aaabbgggcdea')) // 2