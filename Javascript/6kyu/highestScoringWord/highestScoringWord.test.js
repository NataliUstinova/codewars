import high from "./highestScoringWord.js";

describe("Basic tests", () => {
  test("Testing for fixed tests", () => {
    expect(high('man i need a taxi up to ubud')).toBe('taxi');
    expect(high('what time are we climbing up the volcano')).toBe('volcano');
    expect(high('take me to semynak')).toBe('semynak');
    expect(high('massage yes massage yes massage')).toBe('massage');
    expect(high('take two bintang and a dance please')).toBe('bintang');
    expect(high('aa b')).toBe('aa');
    expect(high('b aa')).toBe('b');
    expect(high('bb d')).toBe('bb');
    expect(high('d bb')).toBe('d');
    expect(high('aaa b')).toBe('aaa');
  });
});

describe("Random tests", () => {
  const randint = (a, b) => Math.floor(Math.random() * (b - a + 1)) + a;

  function myhigh(x) {
    x = x.toLowerCase().split(' ');
    let tot = 0, lead = 0, lead2 = 0, letter = {
      'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8, 'i': 9,
      'j': 10, 'k': 11, 'l': 12, 'm': 13, 'n': 14, 'o': 15, 'p': 16, 'q': 17,
      'r': 18, 's': 19, 't': 20, 'u': 21, 'v': 22, 'w': 23, 'x': 24, 'y': 25, 'z': 26
    };

    for (let i = 0; i < x.length; i++) {
      x[i] = x[i].split('');
      for (let j = 0; j < x[i].length; j++) {
        tot += letter[x[i][j]];
      }
      if (tot > lead) {
        lead = tot;
        lead2 = i;
      }
      tot = 0;
    }
    return x[lead2].join('');
  }

  const names = "abcdefghijklmnopqrstuvwxyz".split("");

  for (let i = 0; i < 100; i++) {
    test(`Random test ${i + 1}`, () => {
      let x = [];
      let len = randint(1, 31);
      for (let k = 0; k < len; k++) {
        let word = Array.from({ length: randint(1, 10) }, () => names[randint(0, names.length - 1)]).join('');
        x.push(word);
      }
      x = x.join(' ');
      expect(high(x)).toBe(myhigh(x));
    });
  }
});
