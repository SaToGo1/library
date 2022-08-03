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

