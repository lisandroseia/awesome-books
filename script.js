import { book } from './book.js';

const inputTitle = document.getElementById('title');
const inputAuthor = document.getElementById('author');
const submitBtn = document.querySelector('.add-btn');
const bookSection = document.querySelector('.books');

class collection {
  constructor(books = []) {
    this.books = books;
  }

  add(data) {
    if (this.books.filter((item) => item.author == data.author && item.title == data.title).length > 0) {
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
    const div = document.createElement('div');
    div.className = 'book-wraper';
    div.innerHTML = `<h3>${data.title}</h3>
                  <h3>${data.author}</h3>
                  <button data-value="${data.title}-${data.author}" type="button" class ="remove-button">Remove</button>`;
    bookSection.appendChild(div);
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

const coll = new collection();
if (localStorage.getItem('bookCollection')) {
  const localBooks = JSON.parse(localStorage.getItem('bookCollection'));
  localBooks.bookColl.forEach((element) => {
    coll.add(new book(element.title, element.author));
  });
}
submitBtn.addEventListener('click', () => {
  coll.add(new book(inputTitle.value, inputAuthor.value));
});