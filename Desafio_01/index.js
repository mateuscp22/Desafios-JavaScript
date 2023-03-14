/* let bookTitle = 'Atomic Habits'
let bookAuthor = 'James Clear'
let bookPages = 306
 */
function createBook(title, author, pages) {
    //object
    const book = {
        bookTitle: title,
        bookAuthor: author,
        bookPages: pages,
        printBook: function () {
            console.log('printing...')
        }
    }
    return book
}

const book1 = createBook('Atomic', 'James', 306)
const book2 = createBook('Think', 'Napolean', 450)

book1.color = 'White'

console.log(book1)
console.log(book2)
//function

/* function printBook() {
    console.log('printing...')
} */

/* console.log(book) */