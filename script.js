
const container = document.querySelector("#container");
const Library = [];

function Book(title,author,pages,read){
this.title = title;
this.author = author;
this.pages = pages;
this.read = read;
}

// for pop up form
function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
//https://stackoverflow.com/questions/26439098/how-to-save-user-input-from-a-form-into-javascript-objects
//https://stackoverflow.com/questions/14173484/html-form-input-direct-to-url get element by id <-
function addBookToLibrary(){ //getelementbyid for each form, then push for each value
    Library.push({
        title: newValue,
        author: newValue,
        pages: newValue,
        read: newValue,
    }
);
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
    for(let i = 0; i < Library.length; i++){
        const newDiv = document.createElement('div');
        newDiv.textContent = Library[i].title + ' ';
        container.appendChild(newDiv);
    }
}
// getting the function to display all the books onto the div
bookTitleOnly(Library);
console.log(Library);