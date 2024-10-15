const form = document.querySelector('.contact-form');
const container = document.querySelector("#container");
const addbook = document.querySelector('#addbook');
const Library = [];

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

// addbook.addEventListener("click", addBookToLibrary);

function bookTitleOnly(Library) {
    for(let i = 0; i < Library.length; i++){
        const newDiv = document.createElement('div');
        newDiv.textContent = Library[i].title + ' ';
        container.appendChild(newDiv);
    }
}

//Complicated way of getting user input
//why cant this dissapear after 
function userAddingBooks(event){
    event.preventDefault();

    const data = new
    FormData(document.querySelector('.contact-form'));

    const NewBook = 
    Object.fromEntries(data.entries());

    Library.push(NewBook.title(NewBook));

    console.log(NewBook);
    console.log(Library);
}
addbook.addEventListener("click", userAddingBooks);


// getting the function to display all the books onto the div
bookTitleOnly(Library);
console.log(Library);