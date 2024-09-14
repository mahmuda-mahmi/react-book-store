const Hero = () => {
    return (
        <div className="w-11/12 mx-auto rounded-xl bg-zinc-100 p-28 grid grid-cols-[60%_40%]">
            <div className="flex flex-col gap-10 justify-center">
                <h1 className="text-7xl font-bold">Books to freshen up your bookshelf</h1>
                <div>
                    <button className="btn bg-black hover:bg-black hover:text-white my-4 text-white text-md">View The List</button>
                </div>
            </div>
            <div className="flex justify-end">
                <img className="w-7/12 drop-shadow-[15px_15px_10px_rgba(0,0,0,0.25)]" src="https://i.ibb.co/hXLMmrs/81qow-Ojrn-QL-SL1500-removebg-preview.png" alt="" />
            </div>
        </div>
    );
};

Hero.propTypes = {

};

export default Hero;