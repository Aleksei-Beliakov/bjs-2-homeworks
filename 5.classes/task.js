'use strict'

//Домашнее задание к лекции 5 «Классы»
//Задача 1. Печатное издание

class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix() {
    this.state *= 1.5;
  }

  set state(newState) {
    if(newState < 0) {
      this._state = 0;
    } else if(newState > 100) {
      this._state = 100;
    } else {
      this._state = newState;
    }
  }
  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = 'magazine';
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = 'book';
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'novel';
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'fantastic';
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'detective';
  }
}

//Задача 2. Библиотека

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if(book.state > 30) {
      return this.books.push(book);
    }
  }

  findBookBy(type, value) {
    let book = null;
    for (let i = 0; i < this.books.length; i++) {
      if(this.books[i][type] === value) {
        book = this.books[i];
      }
    }
    return book;
  }

  giveBookByName(bookName) {
    let book = null;
    for(let i = 0; i < this.books.length; i++) {
      if(this.books[i].name === bookName) {
        book = this.books.splice(i, 1)[0];
      }
    }
    return book;
  }
}

class Student {
  constructor(name) {
    this.name = name;
    this.marks = {};
  }

  addMark(mark, subject) {
     if(this.marks[subject] === undefined && mark > 1 && mark < 6) {
      this.marks[subject] = [];
    }

    if(mark > 1 && mark < 6) {
      this.marks[subject].push(mark);
    }
  }

  getAverageBySubject(subject) {
    let subjectAverage = 0;
    if(this.marks[subject] === undefined) {
      return subjectAverage;
    }
    let sumSubjectGrade = this.marks[subject].reduce((item, acc) => item + acc, 0);
    return subjectAverage = sumSubjectGrade / this.marks[subject].length;
  }

  getAverage () {
    let subjects = Object.keys(this.marks);
    let sumSubjectsGrade = 0;

    for(let i = 0; i < subjects.length; i++) {
      sumSubjectsGrade += this.getAverageBySubject(subjects[i]);
    }
    
    if(sumSubjectsGrade === 0 || sumSubjectsGrade === undefined) {
      return 0;
    }
    return sumSubjectsGrade / subjects.length;
  }
}