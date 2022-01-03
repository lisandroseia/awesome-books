let collection = [];

const inputTitle = document.getElementById("title");
const inputAuthor = document.getElementById("author");
const submitBtn = document.querySelector(".add-btn");
const bookSection = document.querySelector('.books');


const book = {
    title: "",
    author: "",
};

submitBtn.addEventListener("click", () => {

    if (inputTitle.value !== '' && inputAuthor.value !== '') {
        const newBook = Object.create(book);
        newBook.title = inputTitle.value;
        newBook.author = inputAuthor.value;
        collection.push(newBook);

        addBook(newBook);
    }


});

function addBook(book) {
    const div = document.createElement('div');
    div.className = `book-wraper ${book.author}${book.title}`;
    div.innerHTML = `<h3>${book.title}</h3>
                  <h3>${book.author}</h3>
                  <button type="button" class ="remove-button">Remove</button>`;
    bookSection.appendChild(div);
    const removeBtn = document.querySelectorAll('.remove-button');
    console.log(removeBtn);
    removeBtn[removeBtn.length - 1].addEventListener('click', (evt) => {
        document.querySelector('.books').removeChild(evt.target.parentNode);
    });
}