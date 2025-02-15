import updateInventory from './updateInventory';

describe('updateInventory', () => {
  test('updates inventory correctly', () => {
    const currentStock = [[25, 'HTC'], [1000, 'Nokia']];
    const newStock = [[5, 'HTC'], [10, 'Apple']];
    const expected = [[10, 'Apple'], [30, 'HTC'], [1000, 'Nokia']];

    expect(updateInventory(currentStock, newStock)).toEqual(expected);
  });

  test('handles empty current stock', () => {
    const currentStock = [];
    const newStock = [[5, 'LG'], [10, 'Sony']];
    const expected = [[5, 'LG'], [10, 'Sony']];

    expect(updateInventory(currentStock, newStock)).toEqual(expected);
  });

  test('handles empty new stock', () => {
    const currentStock = [[1, 'A'], [2, 'B']];
    const newStock = [];
    const expected = [[1, 'A'], [2, 'B']];

    expect(updateInventory(currentStock, newStock)).toEqual(expected);
  });

  test('adds and updates stock correctly', () => {
    const currentStock = [[1, 'A'], [2, 'B']];
    const newStock = [[3, 'A'], [4, 'B']];
    const expected = [[4, 'A'], [6, 'B']];

    expect(updateInventory(currentStock, newStock)).toEqual(expected);
  });
});
