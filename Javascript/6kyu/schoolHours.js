function cost(mins) {
  if (mins <= 60) return 30; // Up to first hour costs $30

  let extraMinutes = mins - 60;

  if (extraMinutes <= 5) return 30; // 5 minutes grace period

  // Round up to the nearest 30 minutes
  let extraHalfHours = Math.ceil((extraMinutes - 5) / 30);

  return 30 + extraHalfHours * 10;
}

function cost2 (mins) {
  return 30 + ( mins>65 ?  Math.ceil((mins-65)/30) : 0 )*10
}

console.log(cost2(45))