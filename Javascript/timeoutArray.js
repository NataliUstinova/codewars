// for (var i=[]; i.length < 3; i.push(2)) {
//   setTimeout(() => {
//     console.log(i)
//   }, i.length*1000)
// }

//[ 2, 2, 2 ]
//[ 2, 2, 2 ]
//[ 2, 2, 2 ]

// for (let i=[]; i.length < 3; i.push(2)) {
//   const newArray = [...i];
//   setTimeout(() => {
//     console.log(newArray)
//   }, i.length*1000)
// }

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
