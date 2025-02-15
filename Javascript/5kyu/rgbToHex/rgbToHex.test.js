import rgbToHex from './rgbToHex.js';

describe('RGB to Hex Conversion', () => {
  test('should convert (255, 255, 255) to "FFFFFF"', () => {
    expect(rgbToHex(255, 255, 255)).toBe('FFFFFF');
  });

  test('should convert (255, 99, 71) to "FF6347"', () => {
    expect(rgbToHex(255, 99, 71)).toBe('FF6347');
  });

  test('should convert (0, 0, 0) to "000000"', () => {
    expect(rgbToHex(0, 0, 0)).toBe('000000');
  });

  test('should clamp values lower than 0 to 0', () => {
    expect(rgbToHex(-20, 50, 100)).toBe('003264');
  });

  test('should clamp values higher than 255 to 255', () => {
    expect(rgbToHex(300, 200, 100)).toBe('FFC864');
  });

  test('should handle edge cases (255, 0, 255)', () => {
    expect(rgbToHex(255, 0, 255)).toBe('FF00FF');
  });
});
