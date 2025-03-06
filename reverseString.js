function reverseString(str) {
  // return str.split('').reverse().join('')
  let reverseStr = '';
   for (let i = str.length - 1; i >= 0; i--) {
     reverseStr += str[i]
   }
   
   return reverseStr;
}

console.log(reverseString("Hello"))