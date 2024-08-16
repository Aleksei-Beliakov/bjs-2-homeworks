"use strict"

function getArrayParams(...arr) {
  
  let min = arr[0];
  let max = arr[0];
  let avg = arr[0];
//  let sum = 0;
/*
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] < min) {
      min = arr[i];
    } else if(arr[i] > max) {
      max = arr[i];
    }
    sum += arr[i];
  }
  avg = +(sum / arr.length).toFixed(2);
  */
  max = Math.max(...arr);
  min = Math.min(...arr);
  avg = +(arr.reduce((a, b) => (a + b)) / arr.length).toFixed(2);

  return { min: min, max: max, avg: avg };
}


function summElementsWorker(...arr) {
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  return sum;
}


function differenceMaxMinWorker(...arr) {
  let min = arr[0];
  let max = arr[0];
  let differenceMaxMin = 0;

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] < min) {
      min = arr[i];
    } else if(arr[i] > max) {
      max = arr[i];
    }
    differenceMaxMin = max - min;
  }
  return differenceMaxMin;
}


function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  let differenceEvenOddElement = 0;

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
    differenceEvenOddElement = sumEvenElement - sumOddElement;
  }
  return differenceEvenOddElement;
}


function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  let averageEvenElement = 0;

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }
    averageEvenElement = sumEvenElement / countEvenElement;
  }
  return averageEvenElement;
}


function makeWork (arrOfArr, func) {
  let maxWorkerResult = func(...arrOfArr[0]);
  
  for(let i = 0; i < arrOfArr.length; i++){
    const funcAnyWorker = func(...arrOfArr[i]);
    if (funcAnyWorker > maxWorkerResult) {
      maxWorkerResult = funcAnyWorker;
    }
  }
  return maxWorkerResult;
}