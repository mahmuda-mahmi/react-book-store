/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { CiStar } from "react-icons/ci";

const Book = ({ book }) => {
    const { name, author, tags, rating, category, cover_image } = book;
    return (
        <div>
            <div className="bg-base-900 w-full p-5 shadow-lg rounded-md border border-zinc-400">
                <div className="flex justify-center bg-base-200 p-5 border border-zinc-400 rounded-md">
                    <img className="h-56 w-full object-contain rounded" src={cover_image} />
                </div>
                <div className=" p-2">
                    <div className=" items-center py-3">
                        {
                            tags.map(tag => <span key={book.id} className="bg-zinc-100 border border-zinc-400 text-xs text-zinc-900 rounded-full p-2 mr-2">{tag}</span>)
                        }
                    </div>

                    <h2 className="text-xl font-bold py-3">{name}</h2>
                    <p className="text-sm text-gray-500 font-semibold">Author: {author}</p>
                    <hr className="my-5" />
                    <div className="flex justify-between font-bold text-zinc-600 text-sm">
                        <p>{category}</p>
                        <p className="flex items-center gap-2"><span>{rating}</span><CiStar className="text-xl font-bold" /></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

Book.propTypes = {

};

export default Book;