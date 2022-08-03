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

