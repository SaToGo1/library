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
    let title = prompt("title: ");
    let author = prompt("author: ");
    let pages = prompt("pages: ");
    let read = prompt("read: (1 if read, 0 if not read)");
    if(read == 0) read = false;
    read = Boolean(read);

    let auxBook = new Book(title, author, pages, read);
    myLibrary.push(auxBook);
}


function displayBooks(){
    for(let x = 0; x < myLibrary.length; x++){
        
        myLibrary[x].info();
    }
}


let theHobbit = new Book("the Hobbit", "J.R.R. Tolkien", 138, true);
let atomicHabits = new Book("Atomic habits", "James Clear", 333, true);
let theWayOfZen = new Book("the way of zen", "Alan watts", 255, true);

myLibrary.push(theHobbit);
myLibrary.push(atomicHabits);
myLibrary.push(theWayOfZen);

displayBooks();