function countLettersAndDigits(input) {
  return input.match(/[a-zA-Z0-9]/g).length;
  // return input.match(/\w^[_]/g).length;
  // return input.matchAll(/\w/g).length;
}

console.log(countLettersAndDigits("hel2!lo_")) //6