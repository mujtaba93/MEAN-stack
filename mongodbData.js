var book = require('./models/bookModel');
var controller = require('./Controllers/bookController');

var queueData = function(){
    console.log('Started adding mongo items . . . ');
    
    var addBooks = function(title, author, genre){
        var bookItem = new book();
        bookItem.title = title
        bookItem.author = author
        bookItem.genre = genre
        bookItem.save();
    }

    //Scifi books
    addBooks("Brave New World", "Aldous Huxley","Sci-Fi");
    addBooks("The Time Machine", "H G Wells","Sci-Fi");
    addBooks("The Hand-Maids", "Margaret","Sci-Fi");
    addBooks("Enders game", "Orson Scott","Sci-Fi");
    addBooks("Hyperion", "Dan Simmon","Sci-Fi");

    //Fiction books
    addBooks("The great gatsby", "Scott","Fiction");
    addBooks("1984", "George Owell","Fiction");
    addBooks("The Hunger games", "Suzanne Collins","Fiction");
    addBooks("The Da Vinci Code", "Robert Langdon","Fiction");
    addBooks("The catcher in the rye", "J D Salinger","Fiction");

    //Drama books
    addBooks("A Game of Thrones", "George RR Marting", "Drama");
    addBooks("A Song of Ice and Fire", "George RR Marting", "Drama");
    addBooks("A Clash of Kings", "George RR Marting", "Drama");
    addBooks("A Storm of swords", "George RR Marting", "Drama");
    addBooks("A Dance with the dragons", "George RR Marting", "Drama");

    console.log("Added all items to database successfully");
}
module.exports = queueData;