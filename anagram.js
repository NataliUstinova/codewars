var isAnagram = function(s, t) {
  if (s.length !== t.length) {
    return false
  }
  const map = new Map()
  
  for (let i in s) {
    if (map.has(s[i])) {
      map.set(s[i], map.get(s[i]) + 1)
    } else {
      map.set(s[i], 1)
    }
  }
  for (let i in t) {
    if (map.has(t[i])) {
      map.set(t[i], map.get(t[i]) - 1)
    } else {
      return false
    }
  }
  return [...map].every(i => i[1] === 0)
};

function isAnagram2(s, t) {
  return s.split('').sort().join('') === t.split('').sort().join('');
}

console.log(isAnagram2("aacc", "caac"))