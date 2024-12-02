const book = {
    title: "The Boy in the Striped Pyjamas",
    author: "Novel by John Boyne",
    pages: 224,
    isRead: true,

    readBook: function() {
        console.log(`siz ${this.title} kitabin ${this.author} jazgan kitabin okyp jatyrsyz`);
    },

    switchReadingStatus: function() {
        this.isRead = false;
        console.log(`oku kuyi janartyldy: ${this.isRead}`);
    }
}

book.readBook();
book.switchReadingStatus();



