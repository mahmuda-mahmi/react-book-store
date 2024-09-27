const getReadBookArr = () => {
    const storedRead = localStorage.getItem("read-book");
    if (storedRead) {
        return JSON.parse(storedRead)
    }
    return [];
}

const savedReadBook = (id) => {
    const storedRead = getReadBookArr();
    const exists = storedRead.find(bookId => bookId === id);
    if(!exists){
        storedRead.push(id);
        localStorage.setItem("read-book", JSON.stringify(storedRead));
    }
}


const getWishArr = () => {
    const storedWish = localStorage.getItem("wish-list");
    if (storedWish) {
        return JSON.parse(storedWish)
    }
    return [];
}

const savedWishlist= (id) => {
    const storedWish = getWishArr();
    const exists = storedWish.find(bookId => bookId === id);
    if(!exists){
        storedWish.push(id);
        localStorage.setItem("wish-list", JSON.stringify(storedWish));
    }
}


