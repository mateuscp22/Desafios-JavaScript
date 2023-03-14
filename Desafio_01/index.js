/* let bookTitle = 'Atomic Habits'
let bookAuthor = 'James Clear'
let bookPages = 306
 */
function CreateBook(title, author, pages) {
    //object
    this.bookTitle = title;
    this.bookAuthor = author;
    this.bookPages = pages
}

const book1 = new CreateBook('Atomic', 'James', 306)

console.log(book1)

//function

/* function printBook() {
    console.log('printing...')
} */

/* console.log(book) */