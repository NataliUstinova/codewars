function arraySplit(values, size) {
  const nested = [];
  let count = 0;
  
  while(count < values.length) {
    nested.push(values.slice(count, count += size))
  }
  
  return nested;
}

console.log(arraySplit(["a","b","c","d"],2))