'use strict'

//Домашнее задание к лекции 7 «Асинхронность» 
//Задача 1. Будильник-колыбельная

class AlarmClock {
  // выделяет память для объекта
  constructor() {
    this.alarmCollection = [];
    this.intervalId;
  }

  // добавляет новый звонок в коллекцию существующих
  addClock(time, callback) {
    
  }
  
  // удаляет звонки по определённому времени
  removeClock() {

  }

  // возвращает текущее время в строковом формате `HH:MM`
  getCurrentFormattedTime() {
    let surrentTime;
    return surrentTime;
  }
  
  // запускает будильник
  start() {

  }

  // останавливает выполнение интервала будильника
  stop() {

  }
  
  // сбрасывает возможность запуска всех звонков
  resetAllCalls() {

  }
  
  // удаляет все звонки
  clearAlarms() {

  }
}