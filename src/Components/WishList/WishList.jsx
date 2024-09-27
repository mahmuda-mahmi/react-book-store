import { useEffect, useState } from 'react';
import Book from '../Book/Book';

const WishList = () => {
    const [wishList, setWishList] = useState([]);
    useEffect(() => {
        const getWishedBooks = JSON.parse(localStorage.getItem("wish-list"));
        if (wishList) {
            setWishList(getWishedBooks);
        }
    }, []);
    return (
        <div className='grid grid-cols-3 mx-auto p-5 gap-10'>{
             (wishList.length  !== 0)? (wishList.map(book => <Book key={book.id} book={book}></Book>)) : <p className='my-20'>Nothing here</p>
        }
           
            
        </div>
    );
};

WishList.propTypes = {

};

export default WishList;