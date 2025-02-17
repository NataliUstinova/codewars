import { stringTransformerConcised as stringTransformer } from "./stringCaseTransforner.js"

describe("Your Solution", () => {
  it("should work for fixed tests", () => {
    expect(stringTransformer('Example Input')).toBe('iNPUT eXAMPLE');
    expect(stringTransformer('')).toBe('');
    expect(stringTransformer('To be OR not to be That is the Question')).toBe('qUESTION THE IS tHAT BE TO NOT or BE tO');
    expect(stringTransformer('You Know When  THAT  Hotline Bling')).toBe('bLING hOTLINE  that  wHEN kNOW yOU');
    expect(stringTransformer(' A b C d E f G ')).toBe(' g F e D c B a ');
  });
});