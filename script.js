let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read,
    this.index = undefined;

    this.info = function() {
        if(this.read === true){
            console.log(this.title + " by " + this.author + ", " + this.pages + " pages, already readed. " + "index = " + this.index);
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
    auxBook.index = myLibrary.push(auxBook) - 1; // push return length, we save the index in which we pushed the object using length - 1
    displayBooks();
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

theHobbit.index = myLibrary.push(theHobbit) - 1;
atomicHabits.index = myLibrary.push(atomicHabits) - 1;
theWayOfZen.index = myLibrary.push(theWayOfZen) - 1;

displayBooks();