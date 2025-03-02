function sumDigits(number) {
  return Math.abs(number).toString().split('').reduce((acc, string) => acc + Number(string), 0)
}

console.log(sumDigits(-32))