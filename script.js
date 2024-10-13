function Book(title,author,pages,read){
this.title = title;
this.author = author;
this.pages = pages;
this.read = read;
this.info = function(){
  return this.title + ' by ' + this.author + ', ' + this.pages + ', ' + this.read
}
}
Book.prototype.publisher = function () {
  return 'published by ' + this.author;
}
const theHobbit = new Book('The Hobbit', 'JRR Tolkien', '295 pages', 'not read yet');

console.log('h')