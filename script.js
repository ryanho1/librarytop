const Library = [];

function Book(title,author,pages,read){
this.title = title;
this.author = author;
this.pages = pages;
this.read = read;
// this.info = function(){
//   return this.title + ' by ' + this.author + ', ' + this.pages + ', ' + this.read
// }
}

var math = new Book('Statistics','bobobo','100','not read');
var science = new Book('biology','jojojo', '999','read');
var history = new Book('American history 101', 'ahahhaha', '1111', 'not read');

function addBookToLibrary(book){
    Library.push(book);
}
addBookToLibrary(math);

function bookTitleOnly(Library) {
    while(Library.length){
        console.table(Library)
    }
}

bookTitleOnly(math);
console.table(Library);
console.log(bookTitleOnly(math))