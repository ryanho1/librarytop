

const form = document.querySelector('.contact-form');
const container = document.getElementById("container");
const addbook = document.querySelector('#addbook');
const Library = [];
const book = container.querySelectorAll(".book");

function Book(title,author,pages,read){
this.title = title;
this.author = author;
this.pages = pages;
this.read = read;
}

var math = new Book('Statistics','bobobo','100','not read');
var science = new Book('biology','jojojo', '999','read');
var NAhistory = new Book('American history 101', 'ahahhaha', '1111', 'not read');

function preinstalledBooks(book){
    Library.push(book);
}

preinstalledBooks(math);
preinstalledBooks(science);
preinstalledBooks(NAhistory);

// for pop up form
function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

  //attach .value to this.title i guess https://www.shecodes.io/athena/77658-how-to-get-the-value-of-an-input-in-javascript#:~:text=To%20get%20the%20value%20of%20an%20input%20in%20JavaScript%2C%20you,user%20in%20the%20input%20field.&text=%2F%2F%20HTML%20%3Cinput%20type%3D%22,%22)%3B%20const%20inputValue%20%3D%20input.
  //https://www.learnwithjason.dev/blog/get-form-values-as-json/
//https://stackoverflow.com/questions/26439098/how-to-save-user-input-from-a-form-into-javascript-objects
//https://stackoverflow.com/questions/14173484/html-form-input-direct-to-url get element by id <-
//getelementbyid for each form, then push for each value
// function addBookToLibrary(){ 
//     Library.push({
//         title: newValue,
//         author: newValue,
//         pages: newValue,
//         read: newValue,
//     }
// );
// }       
let number=0;
function bookTitleOnly(Library) {
    for(let i = 0; i < Library.length; i++){               
         number++;
        const result = number;
        const newDiv = document.createElement('div');
        const button = document.createElement('button');
            
        newDiv.textContent = Library[i].title + ' ';
        button.textContent = 'Remove Book';

        newDiv.id = ('book'+result);
        button.classList.add('removebook');

        container.appendChild(newDiv);
        newDiv.appendChild(button);
    }
}

// HOW TO GET THIS BUTTON TO APPEAR NEXT TO THE NEWLY INPUTTED BOOKS
function userAddingBooks(event){

    event.preventDefault();
    const newDiv = document.createElement('div');
    const button = document.createElement('button');

    button.classList.add('removebook');

    const data = new
    FormData(document.querySelector('.contact-form'));

    const NewBook = 
    Object.fromEntries(data.entries());   

    newDiv.textContent = NewBook.title;
    newDiv.appendChild(button);
    button.textContent = 'Remove Book';
    container.appendChild(newDiv);

    const delbutton = document.querySelectorAll('.removebook');

    delbutton.forEach( button => {
        button.addEventListener('click', deleteBook)
    });
}

bookTitleOnly(Library);

addbook.addEventListener("click", userAddingBooks);
addbook.addEventListener("click", bookTitleOnly);

function deleteBook() {
    this.closest('div').remove(); 
};

const delbutton = document.querySelectorAll('.removebook');

    delbutton.forEach( button => {
        button.addEventListener('click', deleteBook)
    });

console.log(Library);