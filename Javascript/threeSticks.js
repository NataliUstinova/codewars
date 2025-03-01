function maxlen(L1, L2) {
  let a = Math.max(L2,L1)/2
  if ( a < Math.min(L2,L1)) {
    return a
    }
  else {
    return Math.min(L2,L1)
    }

//   return Math.min((L1 + L2) / 3, (L1 + L2) / 4, Math.min(L1, L2));
}

maxlen(5, 12), 5, 1e-9, '(5, 12)'

console.log(maxlen(5, 12)) //5, 1e-9
console.log(maxlen(12, 5)) //5, 1e-9