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
this.readStatus = function() {
    if (this.read === 'not read') {
        this.read = 'read';
        console.log('changed to read');
    } else if (this.read === 'read') {
        this.read = 'not read';
        console.log('to not read');
    }
}
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
     
let number=0;
function bookTitleOnly(Library) {
    for(let i = 0; i < Library.length; i++){               
         number++;
        const result = number;
        const newDiv = document.createElement('div');
        const button = document.createElement('button');
        const buttonRead = document.createElement('button');
            
        buttonRead.setAttribute('data-id', `book${i + 1}`); 

        newDiv.textContent = Library[i].title + ' ';
        button.textContent = 'Remove Book';
        buttonRead.textContent = "read/notread";

        button.classList.add('removebook');
        buttonRead.classList.add('readbutton');
        newDiv.id = ('book'+result);

        buttonRead.addEventListener('click', function() {
            Library[i].readStatus(); // Toggle read status of the current book
            console.log(Library[i]); 
        });

        container.appendChild(newDiv);
        newDiv.appendChild(button);
        newDiv.appendChild(buttonRead);

        
    }
}

function userAddingBooks(event){
    event.preventDefault();
    const newDiv = document.createElement('div');
    const button = document.createElement('button');
    const buttonRead = document.createElement('button');

    button.classList.add('removebook');

    const data = new
    FormData(document.querySelector('.contact-form'));

    const NewBook = 
    Object.fromEntries(data.entries());   

    buttonRead.textContent = "read/notread";
    newDiv.textContent = NewBook.title;
    buttonRead.classList.add('readbutton');
    newDiv.appendChild(button);
    button.textContent = 'Remove Book';
    container.appendChild(newDiv);
    newDiv.appendChild(buttonRead);

    const delbutton = document.querySelectorAll('.removebook');

    delbutton.forEach( button => {
        button.addEventListener('click', deleteBook)
    });
    for(let i = 0; i<1; i++){  
    buttonRead.addEventListener('click', function() {
        Library[i].readStatus(); // Toggle read status of the current book
        console.log(Library[i]); 
    });}
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

// for button to take action
// on button click, function to change object.title, HOW DO I TA`RGET
//Understand Your Current Structure:

// Review how your Library array holds book objects and the existing functions that handle displaying and modifying these objects.
// Update the Display Function:

// Modify the function that displays books to include a button for toggling the read status for each book.
// Ensure this function uses the global Library array directly instead of passing it as a parameter.
// Create the Toggle Function:

// Define a new function that will handle the click event on the read status button.
// This function should determine which book was clicked based on the button’s context and toggle its read status.
// Remove Redundant Code:

// Check for any unnecessary code or event listeners that can be simplified or removed, especially those that set up listeners after rendering the book list.
// Update the Book Addition Function:

// Ensure that after adding a new book, the display function is called to reflect the updated list of books.
// Testing:

// Run your application to verify that:
// You can add books successfully.
// You can remove books as intended.
// The read/unread toggle button works correctly and updates the display.

console.log(Library);