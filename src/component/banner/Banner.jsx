
const Banner = () => {
    return (
        <div>
            <div className="card  bg-[#12132D] w-full shadow-xl  mt-10 text-white ">
                {/* <!-- <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure> --> */}
                <div className="card-body text-center lg:p-20 lg:py-32 w-full space-y-6">
                    <h1 className="text-white text-7xl font-extrabold leading-[80px]">Discover an exceptional cooking class tailored for you!</h1>
                    <p className="w-[80%] mx-auto">Embark on a tailored culinary journey with expert-led cooking classes, accommodating various cuisines, dietary needs, and learning preferences, ensuring an unforgettable experience of discovering the joy of cooking.</p>
                    <div className="flex gap-5 justify-center">
                        <button className="bg-[#0BE58A] px-6 py-3 rounded-3xl">Explore Now</button>
                        <button className="px-6 py-3 border border-white rounded-3xl">Our Feedback</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;