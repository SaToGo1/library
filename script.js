let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read,
    this.index = undefined;
}

/* #######################
#### Display the cards  ##
##########################  */

//Recieve one Book object as parameter, create an html
//card from it and display it.
//Also gives eventlistener to the button.
function CreateCardAndDisplay(auxBook){

    let library = document.getElementById("library");
    let readed = "Not readed";
    if (auxBook.read == true) readed = "Readed";
        
    //Here we create the card
    let newContent = document.createElement('div');
    let bookCard = `<div class='books'> 
        <div>${auxBook.title}</div> 
        <div>By ${auxBook.author}</div> 
        <div>${auxBook.pages} pages</div> 
        <button class="read-Btn" id="read-Btn_${auxBook.index}">${readed}</button> 
        <button class="btnX" id="btnX_${auxBook.index}">☒</button> 
    </div>`; //the button id is created using the index it's Book object has in myLibrary Array.
             //to identify which position has the book of the card in myLibrary array.
    newContent.innerHTML = bookCard; 

    //here we add the card to the DOM so
    //we see it in the page.
    library.appendChild(newContent);

    //we give to new created button an event listener.
    AddEventListenerToButtonX(auxBook.index);

    //we give to new created button an event listener.
    AddEventListenerToReadButton(auxBook.index);
}

//erase all the cards on screen, create 
//again all the cards from the books
//saved on myLibrary Array.
function DisplayAllBookCards(){
    //Select the library container where we place all the cards
    //and we empty all the html.
    let library = document.getElementById("library");
    library.innerHTML = " "; // reset the contents

    //we remake all the cards of the library container
    //loop through the myLibrary array and create cards. 
    for(let i = 0; i < myLibrary.length; i++){
        CreateCardAndDisplay(myLibrary[i]);
    }
}


/* #######################
####    ADDs A BOOK!    ##
##########################  */

//get data from the form after submiting and turn it into a BookObject
//and then passes it to addBookToLibrary.
function CreateBookObjectFromForm() {
    //get the values of the input from the form
    let title = document.getElementById("name").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").value;
    
    //we transform text value from read
    //to boolean read(true) or not read(false)
    if(read == "not-read") read = false;
    else read = true;

    //create book object and add to myLibrary
    let auxBook = new Book(title, author, pages, read);
    AddBookToLibrary(auxBook);
}

//recieve a Book object as parameter and add it to myLibrary Array.
function AddBookToLibrary(myBook){
    
    //let auxBook = new Book(myBook.title, myBook.author, myBook.pages, myBook.read);
    myBook.index = myLibrary.push(myBook) - 1; //push also return the length, length - 1 is used to get the index.

    //After adding a new book we create and display his card.
    CreateCardAndDisplay(myBook);
}

//Event listener from the form to add new books.
let form = document.getElementById("myForm");
form.addEventListener('submit', function(event){
    //Don't let the form to autosubmit.
    event.preventDefault();
    CreateBookObjectFromForm();
});

/* #######################
#### DELETE A BOOK!     ##
##########################  */

//adds an event listener to the delete button from a card, the button 
//id is defined by the index its Book has in myLibrary Array.
function AddEventListenerToButtonX(index) {
    let btnX = document.getElementById(`btnX_${index}`);
    btnX.addEventListener('click', function(event){
        DeleteBook(index);
        ActualizeIndex();

        //after deleting a book we need to erase the cards and print them again.
        //we need to erase all the cards because also we will have conflict with the index
        //of the books and the index of the delete buttons.
        DisplayAllBookCards();
    });
}

//After delete one element of myLibrary Array as the array shifts
//we need to actualize all the indexes.
function ActualizeIndex(){
    for(let i = 0; i < myLibrary.length; i++){
        myLibrary[i].index = i;
    }
}

//Recieve the index as parameter and delete the book on 
//myLibrary array.
function DeleteBook(index){
    myLibrary.splice(index, 1);
}




/* #######################
#### Read Button        ##
##########################  */

//add event listener to the read button
//We check our Book in myLibrary and change the
//boolean read attribute to the opposite and then
//actualize the cards.
function AddEventListenerToReadButton(index) {
    let readButton = document.getElementById(`read-Btn_${index}`);
    readButton.addEventListener('click', function(event){
    
        myLibrary[index].read = !myLibrary[index].read;
        DisplayAllBookCards();
    });
}

/* #######################
#### TESTING AREA       ##
##########################  */

/* Some books for testing */
let theHobbit = new Book("the Hobbit", "J.R.R. Tolkien", 138, true);
let atomicHabits = new Book("Atomic habits", "James Clear", 333, true);
let theWayOfZen = new Book("the way of zen", "Alan watts", 255, false);

AddBookToLibrary(theHobbit);
AddBookToLibrary(atomicHabits);
AddBookToLibrary(theWayOfZen);

//initial display
DisplayAllBookCards();