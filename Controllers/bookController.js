var bookController = function (Book) {

    var get = function (req, res) {

        //Filter based on query strings
        var query = {};
        if (req.query.author) {
            query.author = req.query.author;
        }

        //Listing all records from DB
        Book.find(query, function (err, bookList) {
            if (err)
                res.status(500).send(err);
            else {
                res.json(bookList);
            }
        })
    }

    var post = function (req, res) {
        var book = new Book(req.body);
        console.log(book);
        book.save();
        res.status(201).send(book);
    }
    return {
        get: get,
        post: post
    }
}

module.exports = bookController;