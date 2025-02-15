const updateInventory = (currentStock, newStock) => {
  let inventory = new Map;
  currentStock.forEach(([quantity, name]) => {
    inventory.set(name, quantity)
  })
  newStock.forEach(([quantity, name]) => {
    inventory.set(name, (inventory.get(name) || 0) + quantity)
  })
  return [...inventory]
    .map(([name, quantity]) => [quantity, name])
    .sort((a, b) => a[1].localeCompare(b[1]));
}

export default updateInventory;