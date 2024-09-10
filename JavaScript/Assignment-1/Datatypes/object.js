let book = {
    title: "Harry Potter",
    author: "J.K. Rowling",
    year: 1997,
    genre: "Fiction",
    pages: 320,

    displaydetails: function() {
        console.log('Book Details:')
        console.log(`Title: ${this.title}`);
        console.log(`Author: ${this.author}`);
        console.log(`Year: ${this.year}`);
        console.log(`Genre: ${this.genre}`);
        console.log(`Pages: ${this.pages}`);
    }
};

console.log(`Title of Book: ${book.title}`);
console.log(`Author of Book: ${book.author}`);
book.displaydetails();
book.pages=500;
book.year=1999;
book.displaydetails();

/* 
--output--
Title of Book: Harry Potter
Author of Book: J.K. Rowling
object.js:9 Book Details:
object.js:10 Title: Harry Potter
object.js:11 Author: J.K. Rowling
object.js:12 Year: 1997
object.js:13 Genre: Fiction
object.js:14 Pages: 320
object.js:9 Book Details:
object.js:10 Title: Harry Potter
object.js:11 Author: J.K. Rowling
object.js:12 Year: 1999
object.js:13 Genre: Fiction
object.js:14 Pages: 500
*/
