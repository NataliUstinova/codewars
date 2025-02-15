const updateInventory = (currentStock, newStock) => {
  //создаем коллекцию пар ключ-значение
  let inventory = new Map;
  // Заполняем Map текущими запасами
  currentStock.forEach(([quantity, name]) => {
    inventory.set(name, quantity)
  })
  // Обновляем Map новыми поступлениями
  newStock.forEach(([quantity, name]) => {
    inventory.set(name, (inventory.get(name) || 0) + quantity)
  })
  //по заданию меняем, чтобы количество было сначала 
  // Преобразуем Map обратно в массив и сортируем по алфавиту
  return [...inventory]
    .map(([name, quantity]) => [quantity, name])
    .sort((a, b) => a[1].localeCompare(b[1]));
}

// Пример использования
const currentStock = [[25, 'HTC'], [1000, 'Nokia'], [50, 'Samsung'], [33, 'Sony'], [10, 'Apple']];
const newStock = [[5, 'LG'], [10, 'Sony'], [4, 'Samsung'], [5, 'Apple']];

console.log(updateInventory(currentStock, newStock));

export default updateInventory;