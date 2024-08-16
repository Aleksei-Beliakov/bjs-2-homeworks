"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - 4 * a * c;

  if (d > 0) {
    arr = [(-b + Math.sqrt(d))/(2 * a), (-b - Math.sqrt(d))/(2 * a)];
  } else if (d === 0) {
      arr = [- b / (2 * a)];
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
  let monthlyPercent = percent / 100 / 12;
  let bodyAmount = amount - contribution;
  let totalPayment = +(countMonths * (bodyAmount * (monthlyPercent + (monthlyPercent / (((1 + monthlyPercent) ** countMonths) - 1))))).toFixed(2);
  /*
  if ((percent > 0 && percent < 100) && (monthlyPercent > 0 && monthlyPercent < 1)) {
    return totalPayment;
  } else {
    console.log(`Введенная процентная ставка ${percent} некорректна.`);
  }
  */
  return totalPayment;
}