import { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = () => {
    const [books, setBooks] = useState([]);
    useEffect(
        () => {
            fetch('message.json')
            .then(res => res.json())
            .then(data => setBooks(data))
        },[])

    return (
        <div className='p-5 w-11/12 mx-auto my-20'>
            <h1 className='text-center text-3xl font-bold my-8'>Books</h1>
            <div className='grid grid-cols-3 mx-auto p-5 gap-10'>
                {
                    books?.map(book => <Book key={book.id} book={book}></Book>)
                }
            </div>    
        </div>
    );
};

Books.propTypes = {
    
};

export default Books;