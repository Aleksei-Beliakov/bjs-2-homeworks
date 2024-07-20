"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - 4 * a * c;

  if (d > 0) {
    arr = [(-b + Math.sqrt(d))/(2 * a), (-b - Math.sqrt(d))/(2 * a)];
  } else if (d === 0) {
      arr = [- b / (2 * a)];
  } else {
      arr = [];
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let a = percent;
  let n = countMonths;
  let monthlyPercent;
  let P = monthlyPercent;
  P = a / 100 / 12;
  
  let bodyAmount;
  let S = bodyAmount;
  S = amount - contribution;
  
  let totalPayment;
  totalPayment = +(n * (S * (P + (P / (((1 + P) ** n) - 1))))).toFixed(2);
  
  if ((a > 0 && a < 100) && (P > 0 && P < 1)) {
    return totalPayment;
  } else {
    console.log(`Введенная процентная ставка ${percent} некорректна.`);
  }
}