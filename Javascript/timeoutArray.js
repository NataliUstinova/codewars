// for (var i=[]; i.length < 3; i.push(2)) {
//   setTimeout(() => {
//     console.log(i)
//   }, i.length*1000)
// }

//[ 2, 2, 2 ]
//[ 2, 2, 2 ]
//[ 2, 2, 2 ]

for (let i=[]; i.length < 3; i.push(2)) {
  const newArray = [...i];
  setTimeout(() => {
    console.log(newArray)
  }, i.length*1000)
}

// []
// [ 2 ]
// [ 2, 2 ]

 
for (let i=[]; i.length < 3; i.push(2)) {
  setTimeout((newArray) => {
    console.log(newArray)
  }, i.length*1000, [...i])
}

// []
// [ 2 ]
// [ 2, 2 ]

alert( Number("   123   ") ); // 123
alert( Number("123z") );      // NaN (ошибка чтения числа на месте символа "z")
alert( Number(true) );        // 1
alert( Number(false) );       // 0

let a = (1 + 2, 3 + 4);

alert( a ); // 7 (результат вычисления 3 + 4)