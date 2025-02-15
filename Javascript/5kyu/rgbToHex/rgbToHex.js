// export default function rgbToHex(r, g, b) {
//   function toHex(value) {
//     value = Math.max(0, Math.min(255, value)); // Ограничение диапазона
//     return value.toString(16).padStart(2, '0').toUpperCase(); // Преобразование в HEX
//   }
//
//   return toHex(r) + toHex(g) + toHex(b);
// }

const rgbToHex = (...args) => {
  return args.map(n => Math.max(0, Math.min(255, n))
    .toString(16)
    .padStart(2, '0')
    .toUpperCase()
  ).join('')
}

console.log(rgbToHex(255, 255, 255)); // "FFFFFF"
console.log(rgbToHex(255, 99, 71));   // "FF6347"
console.log(rgbToHex(0, 0, 0));       // "000000"
console.log(rgbToHex(-20, 275, 125)); // "00FF7D"

export default rgbToHex