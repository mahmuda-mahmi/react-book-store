import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const ReadList = () => {
    const [readList, setReadList] = useState([]);
    useEffect(() => {
        const getReadBooks = JSON.parse(localStorage.getItem("read-book"));
        if(readList){
            setReadList(getReadBooks);
        }
    }, []);
    return (
        <div>
            <div className='grid grid-cols-3 mx-auto p-5 gap-10'>
                {
                    readList? (readList?.map(book => <Book key={book.id} book={book}></Book>)) : <p className='my-20 mx-auto'>Nothing here</p>
                }
            </div>    
        </div>
    );
};

ReadList.propTypes = {
    
};

export default ReadList;