function listToArray(list) {
  const arr = [];
  let current = list;

  while (current) {
    arr.push(current.value);
    current = current.next;
  }

  return arr;
}
console.log(listToArray({value: 1, next: {value: 2, next: {value: 3, next: null}}}))