function abbrevName(name){
  const arr = name.toUpperCase().split(" ")
  return arr[0].charAt(0) + "." + arr[1].charAt(0)
}

function abbrevName2(name){
  return name.split(' ').map(i => i[0].toUpperCase()).join('.')
}

console.log(abbrevName2("Peter Jackson"))

