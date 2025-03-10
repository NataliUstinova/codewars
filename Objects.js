function combine(...objects) {
  let res = {};
  for (let obj of objects) {
    for (let [key, value] of Object.entries(obj)) {
      res[key] = (res[key] || 0) + value;
    }
  }
  return res;
}


function combine2(...objects) {
  let res = Object.assign({}, ...objects); // Копируем все ключи, но значения не складываются

  for (let obj of objects) {
    for (let key in obj) {
      res[key] = (res[key] || 0) + obj[key]; // Складываем значения
    }
  }

  return res;
}

const objA = { a: 10, b: 20, c: 30 };
const objB = { a: 3, c: 6, d: 3, e: 0 };
const objC = { a: 5, d: 11, e: 8 };
const objD = { c: 3 };

console.log(combine2(objA, objB))