var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookModel = new Schema({
    title: { type: String },
    author: { type: String },
    genre: { type: String },
    read: { type: Boolean, default: false }
});

// var bookMongoModel = mongoose.model('Book', bookModel);
// module.exports.bookModel = bookMongoModel;
module.exports = mongoose.model('Book', bookModel); 