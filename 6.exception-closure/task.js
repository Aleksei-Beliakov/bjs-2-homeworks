"use strict"

//Домашнее задание к лекции 6 «Обработка исключений и замыкания»
//Задача 1. Форматтер чисел

function parseCount(valueNeedParsed) {
  if(isNaN(valueNeedParsed) || Number.parseFloat(valueNeedParsed) === NaN) {
    throw new Error('Невалидное значение');
  }
  return Number.parseFloat(valueNeedParsed);
}

function validateCount(valueNeedParsed) {
  try {
    return parseCount(valueNeedParsed);
  } catch(error) {
      return error;
  }
}

//Задача 2. Треугольник

class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;

    if(a + b < c || a + c < b || b + c < a) {
      throw new Error('Треугольник с такими сторонами не существует');
    }
  }

  get perimeter() {
    return this.a + this.b + this.c;
  }

  get area() {
    let p = this.perimeter / 2;
    return +Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3);
  }
}

function getTriangle(a, b, c) {
  try {
    let triangle = new Triangle(a, b, c);
    return triangle;
  } catch(error) {
    return {
      get perimeter() {
        return 'Ошибка! Треугольник не существует';
      },
      get area() {
        return 'Ошибка! Треугольник не существует';
      }
    }
  }
}