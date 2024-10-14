
const container = document.querySelector("#container");
const Library = [];

function Book(title,author,pages,read){
this.title = title;
this.author = author;
this.pages = pages;
this.read = read;
}

function addBookToLibrary(){
    let userInput = prompt("What book do you want?"); 
    Library.push(userInput);
}
addbook.addEventListener("click", addBookToLibrary);

var math = new Book('Statistics','bobobo','100','not read');
var science = new Book('biology','jojojo', '999','read');
var NAhistory = new Book('American history 101', 'ahahhaha', '1111', 'not read');

function preinstalledBooks(book){
    Library.push(book);
}

preinstalledBooks(math);
preinstalledBooks(science);
preinstalledBooks(NAhistory);

function bookTitleOnly(Library) {
    for(let i = 0; i <= Library.length; i++){
        const newDiv = document.createElement('div');
        newDiv.textContent = Library[i].title + ' ';
        container.appendChild(newDiv);
    }
}
// getting the function to display all the books onto the div
bookTitleOnly(Library);
console.log(Library);