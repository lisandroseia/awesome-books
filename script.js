let collection = [];

const inputTitle = document.getElementById("title");
const inputAuthor = document.getElementById("author");
const submitBtn = document.querySelector(".add-btn");

const book = {
  title: "",
  author: "",
};

submitBtn.addEventListener("click", () => {
  const newBook = Object.create(book);
  newBook.title = inputTitle.value;
  newBook.author = inputAuthor.value;
  console.log(newBook);
  collection.push(newBook);
});

// console.log(inputTitle, inputAuthor, submitBtn)
