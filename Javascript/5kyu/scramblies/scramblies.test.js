import { scramble2 as scramble } from './scramblies.js';

function dotest(s1, s2, expected) {
  expect(scramble(s1, s2)).toBe(expected);
}

describe('Fixed Tests', () => {
  it('should pass fixed test cases', () => {
    dotest('rkqodlw', 'world', true);
    dotest('cedewaraaossoqqyt', 'codewars', true);
    dotest('katas', 'steak', false);
    dotest('scriptjavx', 'javascript', false);
    dotest('scriptingjava', 'javascript', true);
    dotest('scriptsjava', 'javascripts', true);
    dotest('javscripts', 'javascript', false);
    dotest('jscripts', 'javascript', false);
    dotest('aabbcamaomsccdd', 'commas', true);
    dotest('commas', 'commas', true);
    dotest('sammoc', 'commas', true);
  });
});

describe('Random Tests', () => {
  const charList = 'abcdefghijklmnopqrstuvwxyz';
  const rand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
  const char = () => charList[Math.floor(Math.random() * 26)];

  function sol(str1, str2) {
    let map = {};
    for (let c of str1) map[c] = (map[c] || 0) + 1;
    for (let c of str2) {
      if (!map[c]) return false;
      map[c]--;
    }
    return true;
  }

  const randomStr = (length, exclude) => {
    let arr = [];
    let c;
    for (let i = 0; i < length; i++) {
      while ((c = char()) === exclude) {}
      arr.push(c);
    }
    return arr.join('');
  };

  it('should pass small random tests', () => {
    for (let i = 0; i < 50; i++) {
      let s1 = randomStr(rand(0, 500));
      let s2 = randomStr(rand(0, 200));
      dotest(s1, s2, sol(s1, s2));
    }
  });

  it('should pass very long string tests', () => {
    let s1 = 'abcdefghijklmnopqrstuvwxyz'.repeat(10_000);
    let s2 = 'zyxcba'.repeat(9_000);
    expect(scramble(s1, s2)).toBe(true);

    for (let i = 0; i < 10; i++) {
      let p = Math.random() < 0.5;
      s1 = p ? randomStr(2000000) : randomStr(2000000, char());
      s2 = p ? randomStr(2000000) : randomStr(2000000, char());
      expect(scramble(s1, s2)).toBe(sol(s1, s2));
    }
  });
});
