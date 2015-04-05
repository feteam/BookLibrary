/*
var express = require('express');
var app = express();

app.get('/', function ( req, res ) {
    res.send('Hello World!');
});

app.listen(3000);
*/



var application_root = __dirname,
    express = require('express'),
    path = require('path'),
    mongoose = require('mongoose')
    ;


var app = express();

app.configure(function () {

    app.use( express.bodyParser() );

    app.use( express.methodOverride() );

    app.use( express.static( path.join(application_root, 'site') ) );

    app.use( app.router );

    app.use( express.errorHandler({
        dumpExceptions: true,
        showStack: true
    }));
});



// database
mongoose.connect('mongodb://localhost/library_database');



// schemas
var Keywords = new mongoose.Schema({
    keyword: String
});

var Book = new mongoose.Schema({
    title: String,
    author: String,
    releaseDate: Date,
    keywords: [Keywords]
});

var BookModel = mongoose.model( 'Book', Book );



// test
app.get('/api', function ( req, res ) {
    res.send('Library api is running!');
});

// 返回所有图书
app.get('/api/books', function ( req, res ) {
    return BookModel.find(function ( err, books ) {
        if (!err) {
            return res.send( books );
        } else {
            return console.log( err );
        }
    });
});

// 添加数据
app.post('/api/books', function ( req, res ) {
    var book = new BookModel({
        title: req.body.title,
        author: req.body.author,
        releaseDate: req.body.releaseDate,
        keywords: req.body.keywords
    });

    console.log(book.keywords);

    book.save(function ( err ) {
        if (!err) {
            return console.log('created');
        } else {
            return console.log(err);
        }
    });

    return res.send(book);
});

// 返回单本图书
app.get('/api/books/:id', function ( req, res ) {
    return BookModel.findById( req.params.id, function ( err, book ) {
        if (!err) {
            return res.send( book );
        } else {
            return console.log( err );
        }
    });
});


// update a book
app.put('/api/books/:id', function ( req, res ) {
    console.log( req.body.title );
    return BookModel.findById( req.params.id, function ( err, book ) {
        book.title = req.body.title;
        book.author= req.body.author;
        book.releaseDate = req.body.releaseDate;
        book.keywords = req.body.keywords;

        return book.save(function ( err ) {
            if (!err) {
                console.log('book updated');
            } else {
                console.log(err);
            }
            return res.send( book );
        });
    });
});


// delete a book
app.delete('/api/books/:id', function ( req, res ) {
    console.log('Deleting book with id:' + req.params.id);
    return BookModel.findById( req.params.id, function ( err, book ) {
        return book.remove(function (err) {
            if (!err) {
                console.log('Book removed');
                return res.send(book);
            } else {
                console.log( err );
            }
        });
    });
});



var port = 3000;
app.listen( port, function () {
    console.log('Express server listening on port %d in %s mode.--BookLibrary', port, app.settings.env);
});
