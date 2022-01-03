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

let arr = []

function addBook(book) {
    populateStorage(`${book.title}-${book.author }`);
    const div = document.createElement('div');
    div.className = `book-wraper`;
    div.setAttribute('data-value', `${book.title}-${book.author }`);
    div.innerHTML = `<h3>${book.title}</h3>
                  <h3>${book.author}</h3>
                  <button type="button" class ="remove-button">Remove</button>`;
    bookSection.appendChild(div);
    const removeBtn = document.querySelectorAll('.remove-button');
    removeBtn[removeBtn.length - 1].addEventListener('click', (evt) => {
        document.querySelector('.books').removeChild(evt.target.parentNode);
        arr = evt.target.parentNode.getAttribute('data-value').split('-');
        collection = collection.filter(item => item.title !== arr[0] && item.author !== arr[1]);
        localStorage.removeItem(evt.target.parentNode.getAttribute('data-value'));
    });
}

function populateStorage(bookName) {
    localStorage.setItem(bookName, JSON.stringify({
        author: inputAuthor.value,
        title: inputTitle.value,
    }));
}

// const userDet = JSON.parse(localStorage.getItem('userDet'));
// userName.value = userDet.username;
// userEmail.value = userDet.useremail;
// userMessage.value = userDet.usermsg;