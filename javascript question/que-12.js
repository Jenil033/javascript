function countBook(books) {
    return books.filter(book => book === "Book A").length;
}

let inventory = ["Book A", "Book B", "Book A", "Book C", "Book A"];
console.log("Number of 'Book A' copies" + countBook(inventory));