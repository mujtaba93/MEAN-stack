var book = require('./models/bookModel');

var newbook = book.bookModel();
newbook.title = "The Alchemist"
newbook.author = "Paulo Coelho"
newbook.genre = "Fiction"
console.log(newbook)