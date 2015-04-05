/**
 * app.js
 *
 */


var app = app || {};


$(function () {
    /*
    与服务器端交互前数据填充
    var books = [
        {
            title: 'HTML5',
            author: 'Walker',
            releaseDate: '20141212',
            keywords: 'html html5'
        },
        {
            title: 'CSS3',
            author: 'Walker',
            releaseDate: '20141212',
            keywords: 'html html5'
        }
    ];

    new app.LibraryView(books);
    */

    $('#releaseDate').datepicker();

    new app.LibraryView();
});