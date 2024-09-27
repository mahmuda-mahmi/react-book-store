import React from 'react';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2'
import { useLoaderData, useParams } from 'react-router-dom';

const BookDetails = () => {
    const books = useLoaderData();
    const id = useParams();
    const intId = parseInt(id.id);
    const book = books?.find(book => book.id === intId);
    const { name, author, tags, rating, category, cover_image, review, number_of_pages, publisher, year_of_publishing } = book;
    const addToRead = () => {
        const addToArray = [];
        const getReadBooks = JSON.parse(localStorage.getItem("read-book")) || [];

        if (!getReadBooks) {
            const getWishedBooks = JSON.parse(localStorage.getItem("wish-list")) || [];
            const newWishList = getWishedBooks?.filter((book) => book.id !== intId);
            addToArray.push(book);
            localStorage.setItem("read-book", JSON.stringify(addToArray));
            localStorage.setItem("wish-list", JSON.stringify(newWishList));

            Swal.fire({
                title: "Good job!",
                text: "Added to read!",
                icon: "success"
            });

        }
        else {
            const exists = getReadBooks?.find(book => book.id === intId);
            if (!exists) {
                const getWishedBooks = JSON.parse(localStorage.getItem("wish-list")) || [];
                const newWishList = getWishedBooks?.filter((book) => book.id !== intId);
                addToArray.push(...getReadBooks, book);
                localStorage.setItem("read-book", JSON.stringify(addToArray));
                localStorage.setItem("wish-list", JSON.stringify(newWishList));

                Swal.fire({
                    title: "Good job!",
                    text: "Added to read!",
                    icon: "success"
                });
            }
            else {
                Swal.fire({
                    title: "opps!",
                    text: "Already in the list",
                    icon: "error"
                });
            }
        }
    }

    // --------------------------------------------------
    // add to wishhhhhh

    const addToWish = () => {
        const addToWishArray = [];
        const getWishedBooks = JSON.parse(localStorage.getItem("wish-list")) || [];
        const getReadBooks = JSON.parse(localStorage.getItem("read-book")) || [];
        const existOnRead = getReadBooks?.find(book => book.id === intId);
        if (!getWishedBooks) {
            if (getReadBooks && !existOnRead) {
                addToWishArray.push(book);
                localStorage.setItem("wish-list", JSON.stringify(addToWishArray));
                Swal.fire({
                    title: "Good job!",
                    text: "Added to Wishlist!",
                    icon: "success"
                });
            }
            else if (!getReadBooks) {
                addToWishArray.push(book);
                localStorage.setItem("wish-list", JSON.stringify(addToWishArray));
                Swal.fire({
                    title: "Good job!",
                    text: "Added to Wishlist!",
                    icon: "success"
                });
            }
            else {
                Swal.fire({
                    title: "Opps!",
                    text: "Already On Read",
                    icon: "error"
                });
            }

        }
        else {
            const exists = getWishedBooks?.find(book => book.id === intId);
            if (!exists) {
                if (!existOnRead) {
                    addToWishArray.push(...getWishedBooks, book);
                    localStorage.setItem("wish-list", JSON.stringify(addToWishArray));

                    Swal.fire({
                        title: "Good job!",
                        text: "Added to Wishlist!",
                        icon: "success"
                    });
                }
                else {
                    Swal.fire({
                        title: "Opps!",
                        text: "Already On Read",
                        icon: "error"
                    });
                }

            }
            else {
                Swal.fire({
                    title: "Opps!",
                    text: "Book Already on the list!",
                    icon: "error"
                });
            }
        }

    }

    return (
        <div className='w-10/12 mx-auto grid grid-cols-2 my-10 gap-10'>
            <div className='bg-gray-100 rounded-xl p-10 flex justify-center items-center'>
                <img src={cover_image} className='h-80 rounded-md object-contain' />
            </div>
            <div className='flex flex-col gap-4 p-4'>
                <h1 className="text-3xl font-bold py-3">{name}</h1>
                <h3 className="text-lg text-gray-500 font-semibold">By: {author}</h3>
                <hr />
                <p className='font-bold text-zinc-600 text-md'>{category}</p>
                <hr />
                <p><span className='font-bold'>Review: </span>{review} </p>
                <div className='my-3'>
                    Tags: {
                        tags?.map((tag, idx) => <span className="bg-zinc-100 border border-zinc-400 text-xs text-zinc-900 rounded-full p-2 mr-2" key={idx}>#{tag} </span>)
                    }
                </div>
                <hr />
                <div className='grid grid-cols-2 gap-3 py-5'>
                    <span>Number of pages:</span>
                    <span className='font-bold'>{number_of_pages}</span>
                    <span>Publisher:</span>
                    <span className='font-bold'>{publisher}</span>
                    <span>Year of publishing:</span>
                    <span className='font-bold'>{year_of_publishing}</span>
                    <span>Rating:</span>
                    <span className='font-bold'>{rating}</span>
                    <div className='flex gap-3 mt-5'>
                        <button className='px-5 py-2 bg-white border hover:bg-black hover:text-white border-gray-600 rounded-lg text-black' onClick={addToRead}>Read</button>
                        <button className='px-5 py-2 text-white border hover:text-black hover:bg-white border-gray-400 rounded-lg bg-black' onClick={addToWish}>Wishlist</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

BookDetails.propTypes = {

};

export default BookDetails;