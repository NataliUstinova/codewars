function depositProfit(deposit, rate, threshold) {
  let year = 0;
  let currentAccountValue = deposit;
  
  while (threshold > currentAccountValue) {
    currentAccountValue +=currentAccountValue*(rate/100);
    year++;
  }
  
  return year;
}

console.log(depositProfit(100,20,170 ))