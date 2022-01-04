const inputTitle = document.getElementById('title');
const inputAuthor = document.getElementById('author');
const submitBtn = document.querySelector('.add-btn');
const bookSection = document.querySelector('.books');

class collection {
  constructor(books = []) {
    this.books = books;
  }

  add(data) {
    this.books.push(data);
    this.display(data);
  }

  remove(data) {

  }

  display(data) {
  const div = document.createElement('div');
  div.className = 'book-wraper';
  div.innerHTML = `<h3>${data.title}</h3>
                  <h3>${data.author}</h3>
                  <button type="button" class ="remove-button">Remove</button>`;
  bookSection.appendChild(div);
}
}

class book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

const coll = new collection;

submitBtn.addEventListener('click', () => {
  coll.add(new book(inputTitle.value, inputAuthor.value));
})


