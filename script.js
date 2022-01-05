/* eslint-disable max-classes-per-file */

const inputTitle = document.getElementById('title');
const inputAuthor = document.getElementById('author');
const submitBtn = document.querySelector('.add-btn');
const bookSection = document.querySelector('.books');

class Collection {
  constructor(books = []) {
    this.books = books;
  }

  add(data) {
    if (this.books.filter((item) => item.author === data.author
      && item.title === data.title).length > 0) {
      return;
    }
    this.books.push(data);
    this.display(data);
    this.remove();
    this.populateStorage();
  }

  remove() {
    const removeBtns = document.querySelectorAll('.remove-button');
    removeBtns[removeBtns.length - 1].addEventListener('click', (evt) => {
      bookSection.removeChild(evt.target.parentNode);
      this.removeFromColl(evt.target);
    });
  }

  display(data) {
    if (this) {
      const div = document.createElement('div');
      div.className = 'book-wraper';
      div.innerHTML = `<h3>"${data.title}" by</h3>
                    <h3>${data.author}</h3>
                    <button data-value="${data.title}-${data.author}" type="button" class ="remove-button">Remove</button>`;
      bookSection.appendChild(div);
    }
  }

  removeFromColl(data) {
    const arr = data.getAttribute('data-value').split('-');
    this.books = this.books.filter((item) => item.title !== arr[0] && item.author !== arr[1]);
    this.populateStorage();
  }

  populateStorage() {
    localStorage.setItem('bookCollection', JSON.stringify({
      bookColl: this.books,
    }));
  }
}

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

const coll = new Collection();
if (localStorage.getItem('bookCollection')) {
  const localBooks = JSON.parse(localStorage.getItem('bookCollection'));
  localBooks.bookColl.forEach((element) => {
    coll.add(new Book(element.title, element.author));
  });
}
submitBtn.addEventListener('click', () => {
  coll.add(new Book(inputTitle.value, inputAuthor.value));
});

/* navigation */

const navAdd = document.querySelector('#addNew');
const navList = document.querySelector('#list');
const navContact = document.querySelector('#contact');
const booksWindow = document.querySelector('.books-section');
const addWindow = document.querySelector('.add-books');
const contactWindow = document.querySelector('.contact-section');

navAdd.addEventListener('click', (evt) => {
  evt.preventDefault();
  addWindow.classList.remove('toggle');
  booksWindow.classList.add('toggle');
  contactWindow.classList.add('toggle');
});

navList.addEventListener('click', (evt) => {
  evt.preventDefault();
  booksWindow.classList.remove('toggle');
  addWindow.classList.add('toggle');
  contactWindow.classList.add('toggle');
});

navContact.addEventListener('click', (evt) => {
  evt.preventDefault();
  contactWindow.classList.remove('toggle');
  booksWindow.classList.add('toggle');
  addWindow.classList.add('toggle');
});

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

const todayDate = new Date();
const dateSection = document.querySelector('.date');
dateSection.textContent = `${monthNames[todayDate.getMonth()]} - ${todayDate.getDay()}th - ${todayDate.getFullYear()} 
, ${todayDate.getHours()}:${todayDate.getMinutes()} hs`;
