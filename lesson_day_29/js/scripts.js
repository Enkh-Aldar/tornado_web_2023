document
    .getElementById("new-book-form")
    .addEventListener("submit", function (e) {
        e.preventDefault();
        const title = document.getElementById("title").value;
        const author = document.getElementById("author").value;
        const book = createBook(title, author);
        addBookToLibrary(book);
        document.getElementById("new-book-form").reset();
    });

function createBook(title, author) {
    return {
        title: title,
        author: author
    };
}

function addBookToLibrary(book) {
    const bookList = document.getElementById("book-list");
    const bookElement = document.createElement("div");
    bookElement.classList.add("book");
    bookElement.innerText = `Title: ${book.title}, Author: ${book.author}`;
    bookList.appendChild(bookElement);
}
let book = {
    title: "JavaScript Fundamentals",
    author: "Jane Doe",
    pages: 300,
};
console.log(book.title);
book.year = 2021;
book.pages = 320;

book.getInfo = function (){
    return `${this.title} by ${this.author}, ${this.pages} pages`;
};
console.log(book.getInfo());