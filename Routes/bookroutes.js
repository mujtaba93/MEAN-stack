var express = require('express');

var routes = function (Book) {

    //Setting up routers
    var router = express.Router();
    var bookController = require('../Controllers/bookController')(Book);

    router.route('/books')
        .get(bookController.get)
        .post(bookController.post)

    //Setting up middle ware for Books Router
    router.use('/books/:bookID', function (req, res, next) {
        Book.findById(req.params.bookID, function (err, bookObj) {
            if (err)
                res.status(500).send(err);
            else if (bookObj) {
                req.book = bookObj;
                next();
            }
            else
                res.status(404).send('Book not found');
        })
    })

    router.route('/books/:bookID')
        .get(function (req, res) {
            // if(bookObj === undefined)
            //     console.log('Book not found');
            res.json(req.book);
        })

        .put(function (req, res) {
            req.book.title = req.body.title;
            req.book.author = req.body.author;
            req.book.genre = req.body.genre;
            req.book.read = req.body.read;
            req.book.save(function (err) {
                if (err) {
                    res.status(500).send(err)
                } else {
                    res.json(req.book);
                }
            });
        })

        .patch(function (req, res) {
            if (req.body._id)
                delete req.body._id;
            for (var i in req.body) {
                req.book[i] = req.body[i];
            }

            req.book.save(function (err) {
                if (err) {
                    res.status(500).send(err)
                } else {
                    res.json(req.book);
                }
            });
        })

        .delete(function (req, res) {
            req.book.remove(function (err) {
                if (err) {
                    res.status(500).send(err)
                } else {
                    res.status(204).send('Removed');
                }
            })
        })
    return router;
};

module.exports = routes;