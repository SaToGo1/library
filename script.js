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
    displayOneBook(auxBook);
}

//display one book, useful when we add new books.
//so we don't have to re-do all the cards.
function displayOneBook(auxBook){

    let library = document.getElementById("library");
    let readed = "Not readed";
    if (auxBook.read == true) readed = "Readed";
        
    let newContent = document.createElement('div');
    let bookCard = `<div class='books'> 
        <div>${auxBook.title}</div> 
        <div>By: ${auxBook.author}</div> 
        <div>${auxBook.pages} pages</div> 
        <div>read: ${readed}</div> 
        <button class="btnX">☒</button> 
    </div>`;

    newContent.innerHTML = bookCard; 
    library.appendChild(newContent);
}

//display all the books on screen
function displayBooks(){
    let bookCard;
    let library = document.getElementById("library");
    library.innerHTML = "";

    for(let x = 0; x < myLibrary.length; x++){

        let readed = "Not readed";
        if (myLibrary[x].read == true) readed = "Readed";
        
        let newcontent = document.createElement('div');
        bookCard = `<div class='books'> 
            <div>${myLibrary[x].title}</div> 
            <div>by ${myLibrary[x].author}</div> 
            <div>${myLibrary[x].pages} pages</div> 
            <div>${readed}</div> 
            <button class="btnX">☒</button> 
        </div>`;

        newcontent.innerHTML = bookCard; 

        library.appendChild(newcontent);
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