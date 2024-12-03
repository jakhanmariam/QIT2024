const book = {
    title: "The Boy in the Striped Pyjamas",
    author: "Novel by John Boyne",
    pages: 224,
    isRead: false,

    readBook: function() {
        return `siz ${this.title} kitabin ${this.author} jazgan kitabin okyp jatyrsyz`;
    },

    toggleReadingStatus: function() {
        this.isRead = !this.isRead;
        return this.isRead;
    }
}

console.log(book.readBook());
console.log(book.toggleReadingStatus 
    ? 'siz osy kitapti okydynyz' 
    : 'siz osy kitapti okydynyz'
);


