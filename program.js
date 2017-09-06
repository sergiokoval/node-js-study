var book =require('./lib/book.js').book;

book.addPage('some content');

console.log(book);

var val = 100;

var divider = process.argv[2];

console.log (val / divider);