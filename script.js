let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function() {
        if(this.read === true){
            console.log(this.title + " by " + this.author + ", " + this.pages + " pages, already readed.");
        } else {
            console.log(this.title + " by " + this.author + ", " + this.pages + " pages, not read yet.");
        }
    }
}

function addBookToLibrary() {
    let title = document.getElementById("name").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").value;
    if(read == "not-read") read = false;
    else read = true;

    let auxBook = new Book(title, author, pages, read);
    myLibrary.push(auxBook);
}


function displayBooks(){
    for(let x = 0; x < myLibrary.length; x++){
        myLibrary[x].info();
    }
}

let form = document.getElementById("myForm");

form.addEventListener('submit', function(event){
    event.preventDefault();
    addBookToLibrary();
});



let theHobbit = new Book("the Hobbit", "J.R.R. Tolkien", 138, true);
let atomicHabits = new Book("Atomic habits", "James Clear", 333, true);
let theWayOfZen = new Book("the way of zen", "Alan watts", 255, true);

myLibrary.push(theHobbit);
myLibrary.push(atomicHabits);
myLibrary.push(theWayOfZen);

displayBooks();