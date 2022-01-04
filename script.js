const inputTitle = document.getElementById('title');
const inputAuthor = document.getElementById('author');
const submitBtn = document.querySelector('.add-btn');
const bookSection = document.querySelector('.books');

class collection {
  constructor(books = []) {
    this.books = books;
  }

  add(data){
     this.books.push(data);
  }

  remove(data){
    
  }

}

class book {
 constructor(title, author){
   this.title = title;
   this.author = author;
 }
}

const coll = new collection;

submitBtn.addEventListener('click', () =>{
coll.add(  new book(inputTitle.value, inputAuthor.value));
})


