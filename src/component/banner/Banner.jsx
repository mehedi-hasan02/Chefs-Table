import image from '../../assets/images/Rectangle1.png'
const Banner = () => {

    return (
        <div>
            <div className="card  w-full shadow-xl  mt-10 text-white" style={{ backgroundImage: `url(${image})` }}>
                <div className="card-body text-center lg:p-20 lg:py-32 w-full space-y-6">
                    <h1 className="text-white text-3xl lg:text-7xl font-extrabold lg:leading-[80px]">Discover an exceptional cooking class tailored for you!</h1>
                    <p className="w-full lg:w-[80%] lg:mx-auto">Embark on a tailored culinary journey with expert-led cooking classes, accommodating various cuisines, dietary needs, and learning preferences, ensuring an unforgettable experience of discovering the joy of cooking.</p>
                    <div className="flex flex-col lg:flex-row gap-5 justify-center">
                        <button className="bg-[#0BE58A] px-6 py-3 rounded-full text-black text-xl">Explore Now</button>
                        <button className="px-6 py-3 border border-white rounded-3xl">Our Feedback</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;